import { Provider } from 'react-redux';
import SignIn from '../components/SignIn'
import configureStore from '../config/store'

const store = configureStore();

const SignInLayout = (props) => (

    <Provider store={store}>
        <div>
            <SignIn />
        </div>
    </Provider>

)

export default SignInLayout