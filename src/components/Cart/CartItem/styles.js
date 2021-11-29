import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 80,
    paddingTop: '50%',
    maxWidth: '60%',
  
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 60,
    
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    
  },
}));