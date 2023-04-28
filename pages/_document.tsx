import Document from 'next/document'
import { withFork } from 'effector-next'

const enhance = withFork({ debug: false })

export default enhance(Document)
