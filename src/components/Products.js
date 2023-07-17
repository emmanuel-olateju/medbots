import React from 'react';
import '../components/Products.css';
import Navbar from './navbar';
import _productCards from './productcards';
import aiLogo from '../assets/aiLogo.jpg';

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
                    <_productCards header="TTS" body={TTSbody} img={aiLogo} />
                    <_productCards header="docChat" body={DOCCHATbody} img={aiLogo} />
                    <_productCards header="imageDoc" body={IMAGEDOCbody} img={aiLogo} />
                </div>
                <div className="products-row">
                    <_productCards header="medData" body={MEDDATAbody} img={aiLogo} />
                    <_productCards header="myTrack" body={MYTRACKbody} img={aiLogo} />
                    <_productCards header="locateDoc" body={LOCATEDOCbody} img={aiLogo} />
                </div>
            </div>
        </>
    );
};

export default Products;