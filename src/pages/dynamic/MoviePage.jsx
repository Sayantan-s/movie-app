import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Catagory, Star,Voters } from '../../utils/Icons';
import Image from '../../utils/Image.component';
import Spinner from '../../utils/Spinner.component';
import { NormalAvatar } from '../../components/ui/Avatar.component'
import { useHistory } from 'react-router';
import ButtonComponent from '../../components/ui/Button.component';

const MoviePage = (props) => {
    const pageData = useSelector(state => state.firestore.ordered.movies)?.find(data => {
        return data.id === props.match.params.id
    }).moviepage;

    const history = useHistory();

    console.log(pageData);

    const avatarShowing = pageData?.cast.length > 4 ? pageData.cast.slice(0,4) : pageData?.cast;

    const notShowing = pageData?.cast.slice(4,pageData.cast.length);

    let starArray = [];

    for(let i = 0;i< pageData?.movieProps.star;i++){
        starArray.push(i);
    }
    return (
        <Page>
         {
             pageData ?
             <>
              <PageImg 
                src={pageData.photoUrl}
                radius={'1.5rem'}
                width={"100%"}
                height={"700px"}
                alt={pageData.name}
             /> 
             <PageContent>
                 <h1>{pageData.name} <span>({pageData.movieProps.release})</span></h1>
                 <Divs gap="1.2rem">
                    <StarRate>
                        {
                            starArray.map(star => (
                                    <Star
                                    key={star} 
                                    size="1.5rem" 
                                    fill="#F9982D"/>
                            ))
                        }
                    </StarRate>
                </Divs>
                <Divs gap="1.2rem">
                    <Divs gap="0.7rem" margin="1rem 0">
                        <Catagory size={'1.2rem'} fill={'#706bfa'} />
                        <div>{pageData?.movieProps.genre.join(' | ')}</div>
                    </Divs>
                    <Divs gap="0.7rem" margin="1rem 0">
                        <Voters size={'1.2rem'} fill={'#706bfa'} />
                        <div>{pageData?.movieProps.rates} votes</div>
                    </Divs>
                </Divs>
                 <p>{pageData.description.length > 500 ? pageData.description.slice(0,500) + '...' : pageData.description}</p>
                 <MovieRoles>
                   <Divs flexDir={'column'}>
                        <h2>Directors</h2>
                        <p>{pageData.director}</p>
                   </Divs>
                   <Divs flexDir={'column'}>
                        <h2>Writers</h2>
                        <p>{Array.isArray(pageData.writers) ? pageData.writers.join(', ') : pageData.writers}</p>
                   </Divs>
                </MovieRoles>
                <Divs flexDir="column">
                    <h3>Cast:</h3>
                    <div className="cast">
                        {
                            avatarShowing.map(cast => {
                                return <NormalAvatar
                                className="avatar"
                                key={cast.name} 
                                src={cast.img}
                                name={cast.name}
                                />
                            })
                        }
                       <span>
                       {notShowing.length}+
                       </span>
                    </div>
                </Divs>
                <Divs margin="2.5rem 0 0 0">
                    <ButtonComponent>Book Now</ButtonComponent>
                    <ButtonComponent>
                        <span>Watch Trailer</span>
                    </ButtonComponent>
                </Divs>
             </PageContent>
             </>
              : <div>Loading...</div>   
         }
        </Page>
    )
}

export default MoviePage


const Page = styled(motion.section)`
display: flex;
height: 100%;
overflow-y:hidden;
justify-content:center;
`
const PageImg = styled(Image)`
flex: 0.35;
margin: 2rem 0;
`
const Loader = styled(Spinner)`
`

const PageContent = styled(motion.section)`
flex:0.4;
margin: 4rem 0 0 3rem;
h1{
    font-size: 2rem;
    margin:0;
    span{
        font-weight: 200;
        color: var(--text);
    }
}
p{
    font-size:0.92rem;
    text-align: justify;
    word-break: break-all;
    font-style:oblique;
}
`
const Divs = styled.div`
display: flex;
align-items: center;
flex-direction: ${props => props.flexDir || 'row'};
gap: ${props => props.gap};
margin: ${props => props.margin || '0'};
span{
    height:max-content;
    color:#F58880;
    font-weight: 600;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
}
h2{
    color : #FBAA3F;
    margin: 0;
    align-self: flex-start;
     font-size: 1.5rem;
}
p{  
    font-style : normal;
    margin: 0;
    align-self: flex-start;
}
h3{
    color :  #706bfa; 
    align-self: flex-start;
    font-size: 1.5rem;
    margin:1rem 0 0.7rem 0;
}
.cast{
    display: flex;
    align-self: flex-start;
    gap:0.5rem;
    span{
        display: flex;
        justify-content: center;
        width: 45px;
        height:45px;
        border-radius:50%;
        border: 3px solid #FBAA3F;
        color: #FBAA3F;
    }
}
`
const StarRate = styled.div`
display: flex;
gap: 0.3rem;
justify-content: start;
`
const MovieRoles = styled.div`
display: flex;
gap: 2rem;
`