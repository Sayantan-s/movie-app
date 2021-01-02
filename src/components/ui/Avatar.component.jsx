//import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import styled from 'styled-components'
import { Profile } from '../../utils/Icons'

const ProfileAvatar = () => {
    const takeInitials = userName => {
        let user = userName.split(' ').slice(0,2).map(each => {
            return each[0];
        }).join('');
       return user
    }
    const [ hoverState,setHover ] = React.useState(false)
    useFirestoreConnect([
        {
            collection: 'users'
        }
    ])
    const { firebase : { profile : { picture,name,id } } } = useSelector(state => state);
    const fbDp = useSelector(state => state.firestore.ordered.users?.find(user => user.id === id)?.picture.data?.url)
    const authProvider = useSelector(state => state.firebase.auth.providerData[0].providerId)
    console.log(authProvider)
    //console.log(fbPic);
    return (
       <ProfilePicture 
       >
           {
               authProvider ? 
               <img src={authProvider === 'facebook.com' ? fbDp : picture} alt={name} />
               : <div 
               onMouseOver={() => setHover(true)}
               onMouseOut={() => setHover(false)}
               className="initials">
                   { !hoverState && <Profile 
                   size="2rem" 
                   fill="#F46C3F"
                   />}
                  {hoverState && <span>{takeInitials(name)}</span>}
                </div>
           }
       </ProfilePicture>
    )
}

export default ProfileAvatar

export const NormalAvatar = ({src,name,...otherProps}) => 
<ProfilePicture {...otherProps}>
    <img src={src} alt={name} />
</ProfilePicture>


const ProfilePicture = styled.div`
position: relative;
cursor: pointer;
width: 50px;
height: 50px;
overflow: hidden;
border-radius : 50%;
background-color:#FBE9E7;
display:flex;
justify-content:center;
align-items:center;
img{
    position: absolute;
    object-fit:cover;
    width: 100%;
    height: 100%;
}
.initials{
    span{
        text-transform : uppercase;
        font-size: 1.5rem;
        color : #F46C3F;
    }
}
`