import React from 'react'
import styled from 'styled-components'
import Button from '../../components/ui/Button.component'
import Input from '../../components/ui/Input.component'
import AuthSecondaryRoutes from '../../utils/AuthSecondaryRoutes.component'
import { useForm } from '../../utils/customHooks'
import { Facebook, Google, Mail, PasswordShow } from '../../utils/Icons'
import Spinner from '../../utils/Spinner.component'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn } from '../../store/actions/authActions.redux'

const Login = () => {
    const [form,handleChange] = useForm({
        email : '',
        password : ''
    })
    const signInDispatch = useDispatch();
    const { auth : { authError } } = useSelector(state => state); 
    const {email,password} = form
    const [ uploadtimeState,setUploadTime ] = React.useState(false);
    const InputProps = {
        email : {
            inpType : 'input',
            ElementConfig : {
                type : 'email',
                placeholder : 'Your email'
            },
            value: email,
            Icon : Mail
        },
        password : {
            inpType : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'Your password'
            },
            value : password,
            Icon : PasswordShow
        }
    }
    let InputItems = [];
    for(let i in InputProps){
        InputItems.push({
            key : i,
            data : {
                ...InputProps[i],
                ElementConfig : {
                    ...InputProps[i].ElementConfig,
                    name : i
                }
            }
        })
    }
    const SubmitHandler = async (eve) => {
        eve.preventDefault();
        await signInDispatch(LogIn(form));
    }
    return (
        <Form onSubmit={SubmitHandler}>
            {
                InputItems.map(({key,data}) => {
                    return <Input
                    key={key}
                    {...data}
                    onChange={handleChange}
                    />
                })
            }
            <SubmitButton>
                <span>Login</span>
                    {uploadtimeState && <Spinner />}  
            </SubmitButton>
            <SocialAuth>
               <span> or login with </span>
               <div className="social-auth">
                   <Google size="1.2rem"/>
                   <Facebook size="1.2rem" fill="#006BE5"/>
               </div>
            </SocialAuth>
            <AuthSecondaryRoutes 
            text="Dont have an account?"
            linktext="Sign up"
            to="/signup"
            />
        </Form>
    )
}

export default Login


const Form = styled.form`
    display: flex;
    gap : 1rem;
    flex-direction: column;
    width : 400px;
`
const SubmitButton = styled(Button)`
width:80%;
cursor:pointer;
background-color : #706bfa;
color : #fff;
align-self: center;
display : flex;
align-items: center;
justify-items : center;
justify-content: center;
gap: 0.5rem;
`
const SocialAuth = styled.div`
display : flex;
flex-direction: column;
gap: 0.5rem;
span {
    letter-spacing : 0.1rem;
    font-size : 0.8rem;
    font-weight : 200;
    -webkit-font-smoothing : antialiased;
    text-transform : uppercase;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    &::before,&::after{
        height : 1px;
        width : 10%;
        content : '';
        opacity: 0.6;
        background-color : var(--text);
    }
}
.social-auth {
    display :flex;
    justify-content : center;
    gap: 0.5rem;
    align-items: center;
    svg{
        cursor : pointer;
    }
}
`