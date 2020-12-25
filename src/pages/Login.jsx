import React from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button.component'
import Input from '../components/ui/Input.component'
import AuthSecondaryRoutes from '../utils/AuthSecondaryRoutes.component'
import { useForm } from '../utils/customHooks'
import { Mail, PasswordShow } from '../utils/Icons'
import Spinner from '../utils/Spinner.component'
import { useDispatch } from 'react-redux'
import { LogIn } from '../store/actions/authActions.redux'

const Login = ({match: {path}}) => {
    const [form,handleChange] = useForm({
        email : '',
        password : ''
    })
    const signInDispatch = useDispatch();
    console.log(path)
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
