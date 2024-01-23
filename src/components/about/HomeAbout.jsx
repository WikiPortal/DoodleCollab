import React from 'react';
//images

import idea from '../../assets/creative-writing.png';
import component from '../../assets/abstract.png';
import project from '../../assets/blueprint.png';
import collaborate from '../../assets/collaborate.png';
//style

import './homeabout.css';

const HomeAbout = () => {
    return (
        <div className='about_container'>
            <div className='key_feature'><p>Key Feature</p></div>
            <div className='about_head'><p>Why use DoodleCollab ?</p></div>
            <div className='about_text'>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, </div>
            <div className='about_boxes'>
                <div className='box'>
                    <div className='sticker'><img src={idea} alt='idea' /></div>
                    <div className='box_head'><b>Bring Ideas to Live</b></div>
                    <div className='box_text'>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys</div>
                    <a href='#' className='box_link'>See How</a>
                </div>
                <div className='box'>
                    <div className='sticker'><img src={component} alt='abstract' /></div>
                    <div className='box_head'><b>Component Templates</b></div>
                    <div className='box_text'>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys</div>
                    <a href='#' className='box_link'>See How</a>
                </div>
                <div className='box'>
                    <div className='sticker'><img src={project} alt='project' /></div>
                    <div className='box_head'><b>Project Management</b></div>
                    <div className='box_text'>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys</div>
                    <a href='#' className='box_link'>See How</a>
                </div>
                <div className='box'>
                    <div className='sticker'><img src={collaborate} alt='collaborate' /></div>
                    <div className='box_head'><b>Live Collaboration</b></div>
                    <div className='box_text'>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys</div>
                    <a href='#' className='box_link'>See How</a>
                </div>

            </div>
        </div>
    )
}

export default HomeAbout