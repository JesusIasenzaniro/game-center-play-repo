import Cards from './components/CardsComponents';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './App.css';
function App() {
    return (
        <Container maxWidth='md'>
            <Grid container alignItems='center' className='app'>
                <Grid container justify='space-around'>
                    <Cards />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
