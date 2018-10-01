import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

const LandingContent = () => (
    <Container textAlign='center' className='landingContent_1'>
        <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat congue justo vitae viverra. Praesent vehicula nisl purus,
                        in porttitor ante pretium id. Quisque at laoreet urna. Aliquam varius elit est, id commodo enim tincidunt at. Nam gravida consectetur venenatis.
                        Nullam sit amet dignissim sem. Ut eget diam at arcu maximus pharetra sit amet non justo. Duis ac nunc nisi.
                        </p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1}>
                <Grid.Column>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat congue justo vitae viverra. Praesent vehicula nisl purus,
                            in porttitor ante pretium id. Quisque at laoreet urna. Aliquam varius elit est, id commodo enim tincidunt at. Nam gravida consectetur venenatis.
                            Nullam sit amet dignissim sem. Ut eget diam at arcu maximus pharetra sit amet non justo. Duis ac nunc nisi.
                        </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

export default LandingContent