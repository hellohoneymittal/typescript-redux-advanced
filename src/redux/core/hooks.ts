import{TypedUseSelectorHook , useDispatch , useSelector} from 'react-redux';
import { ActionDispatch , RootState } from './store';

export const useAppDispatch = () => useDispatch<ActionDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;