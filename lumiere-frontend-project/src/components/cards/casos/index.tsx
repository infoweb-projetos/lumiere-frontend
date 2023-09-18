import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CasoAdvogado } from '../../../pages/casos-advogado';

export default function Individual () {
    const {id} = useParams();
    return(
    <>
        <CasoAdvogado id={id? id.toString() : null}/>    
    </>
    )
}