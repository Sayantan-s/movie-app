import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Image from '../../utils/Image.component';
import Spinner from '../../utils/Spinner.component';

const MoviePage = (props) => {
    const pageData = useSelector(state => state.firestore.ordered.movies)?.find(data => {
        return data.id === props.match.params.id
    }).moviepage;

    console.log(pageData);

    return (
        <Page>
         {pageData ? 
         <PageImg>
            <Image 
            src={pageData.photoUrl}
            width={"100%"}
            height={"100%"}
            alt={pageData.name}
            />     
        </PageImg> : <Loader fill="#706bfa"/>}
        </Page>
    )
}

export default MoviePage


const Page = styled(motion.section)`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
const PageImg = styled(Image)`
flex: 0.3;
width: 100%;
height: 100%;
`
const Loader = styled(Spinner)`
`