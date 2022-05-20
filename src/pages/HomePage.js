import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromUrlRequest } from '../store/auth/actions';

const HomePage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserFromUrlRequest())
        // eslint-disable-next-line
    }, [])

    const user = useSelector((state) => state.auth.user);
    console.log(user);

    return <div>hello</div>
}
export default HomePage