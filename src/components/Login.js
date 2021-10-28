import react from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { Box } from '@material-ui/core';

const Login = () => {
    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;