import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCatsData } from '../Data/CatState';

//Components
import Card from './Card';
import Pagination from './Pagination';

//Styles
import {H1} from './Styles.styled';

export default function Main() {
    //Set values for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [catsPerPage] = useState(10);

    //Get cats data
    const cats = useSelector(state => state.cats.cats);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getCatsData());
    }, [dispatch]);

    //Data for pagination
    const indexOfLastCat = currentPage * catsPerPage;
    const indexOfFirstCat = indexOfLastCat - catsPerPage;
    const currentCats = cats.slice(indexOfFirstCat, indexOfLastCat);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='row'>
            <div className='col'>
                <div className='d-flex justify-content-center'>
                    <div className='col-6 text-center border-bottom mt-4 mb-4'>
                        <H1>CAT SPECIES GALLERY</H1>
                        <p>Lots of cats for your viewing pleasure.</p>
                    </div>
                </div>
                {currentCats?.map(cat => 
                    <Card
                        key={cat?.name}
                        img={cat?.image?.url}
                        name={cat?.name}
                        description={cat?.description}
                        temperament={cat?.temperament}
                        lifeSpan={cat?.life_span}
                        origin={cat?.origin}
                    />
                )}
                <Pagination 
                    catsPerPage={catsPerPage} 
                    total={cats?.length} 
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
