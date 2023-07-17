import React from 'react';
import '../components/Products.css';
import Navbar from './navbar';
import _productCards from './productcards';
import aiLogo from '../assets/aiLogo.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
    const TTSbody="Text to Speech application specialized for medical use case.";
    const DOCCHATbody="chatbot application designed to relate with user as a doctor";
    const IMAGEDOCbody="Uses scan images for diagnostics & prognostics.";
    const MEDDATAbody="Just tell me what medical data you want. I'll fetch it.";
    const MYTRACKbody="Feed me your medical records, I will keep track of them & your goals";
    const LOCATEDOCbody="Describe what medical service you desire, I'll find it for you."

    return(
        <>
            <Navbar />
            <div className="products-container">
                <div className="products-row">
                    <Link to="/products"><_productCards header="TTS" body={TTSbody} img={aiLogo} /></Link>
                    <Link to="/products"><_productCards header="docChat" body={DOCCHATbody} img={aiLogo} /></Link>
                    <Link to="/products"><_productCards header="imageDoc" body={IMAGEDOCbody} img={aiLogo} /></Link>
                </div>
                <div className="products-row">
                    <Link to="/products"><_productCards header="medData" body={MEDDATAbody} img={aiLogo} /></Link>
                    <Link to="/products"><_productCards header="myTrack" body={MYTRACKbody} img={aiLogo} /></Link>
                    <Link to="/products"><_productCards header="locateDoc" body={LOCATEDOCbody} img={aiLogo} /></Link>
                </div>
            </div>
        </>
    );
};

export default Products;