import React from 'react';
import {H3, Bold} from './Styles.styled';

export default function Card({name, img, description, temperament, lifeSpan, origin}) {
    return (
        <div class="d-grid ">
            <div class="card m-4" >
                <div class="row g-0">
                    <div class="col-3">
                        <img src={img} class="img rounded-start"  width='290' height='310' alt="..."/>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <H3 class="card-title">{name}</H3>
                            <p><Bold>Origin: </Bold>{origin}</p>
                            <p class="card-text">{description}</p>
                            <p><Bold>Temperament: </Bold>{temperament}</p>
                            <p><Bold>Life Span: </Bold>{lifeSpan} years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
