import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import css from './StatusEditor.module.css';
import {
  deleteAllCompletedTasks,
  markAllCompleted,
  deleteAllTasks,
} from 'redux/tasksSlice';
// import { getStatusFilter } from '../../redux/selectors';

export const StatusEditor = () => {
  const dispatch = useDispatch();

  const handleComplitedChange = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteAllTasks());
    }
  };

  return (
    <div className={css.wrapper}>
      <Button onClick={() => dispatch(markAllCompleted())}>Mark all</Button>
      <Button onClick={() => dispatch(deleteAllCompletedTasks())}>
        Delete all completed
      </Button>
      <Button onClick={handleComplitedChange}>Delete all</Button>
    </div>
  );
};
