import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const ContainerFooter = () => (
    <Container fluid textAlign='center' className='footerFluid'>
        <Grid columns={2}>
            <Grid.Row className='rowFooter'>
                <Grid.Column>
                    <p>Link 1</p>
                </Grid.Column>
                <Grid.Column>
                    <p>Contact</p>
                </Grid.Column>
                <Grid.Column>
                    <p>Link 3</p>
                </Grid.Column>
                <Grid.Column>
                    <p>Link 4</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <p>Copyrights.................</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Container>
)

export default ContainerFooter