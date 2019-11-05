import React from 'react'
import { render } from 'react-dom'
import styled from '@emotion/styled'

export const App: React.FC = () => 
	<Page>
		<h1>🐣 Preact Starter</h1>
	</Page>

const Page = styled.div`
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';
	margin: 0 auto;
	text-align: center;
`

render(<App />, document.getElementById('root'))
