import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import EmpForm from './components/EmpForm';
import DataTable from './components/DataTable';
import { EmpContextProvider } from './contexts/EmpContext';

class App extends Component {
	render() {
		return (
			<Container className='p-2'>
				<EmpContextProvider>
					<Card>
						<Card.Header className='bg-white'>
							<h5 className='text-secondary text-center text-uppercase'>Add Employee Information</h5>
						</Card.Header>
						<Card.Body>
							<EmpForm />
						</Card.Body>
					</Card>
					<Card className='my-3'>
						<Card.Header className='bg-white'>
							<h5 className='text-primary text-uppercase'>Employees Table</h5>
						</Card.Header>
						<Card.Body className='p-0'>
							<DataTable />
						</Card.Body>
					</Card>
				</EmpContextProvider>
			</Container>
		);
	}
}
export default App;
