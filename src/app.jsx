/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Alert, Type, Checkbox, Stack, Button } from '@uswitch/spark'
import { Container, PoundCircleIcon, RightArrowIcon } from './components'

export default () => (
  <Container sx={{ pt: 'xxl' }}>
    <Type.h5 as="h1">Welcome to Spark!</Type.h5>
    <Type.s2 sx={{ color: 'grey-60' }}>
      Save money on switching your bills
    </Type.s2>

    <Stack align="stretch" spacing="xxs" sx={{ my: 'xxl' }}>
      <Checkbox label="Energy" checked />
      <Checkbox label="Broadband" />
      <Checkbox label="Mobile Phones" />
      <Checkbox label="Car Insurance" />
      <Checkbox label="Credit Card" />
    </Stack>

    <Alert
      variant="success"
      icon={<PoundCircleIcon size={24} />}
      title="£387*"
      sx={{ mb: 'xxs' }}
    >
      Estimated savings
    </Alert>

    <Button
      variant="primary"
      rightIcon={<RightArrowIcon />}
      sx={{ mb: 'lg' }}
      fullWidth
    >
      Next
    </Button>
  </Container>
)
