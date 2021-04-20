import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export default class RequestRow extends Component {
    state = {
        loading1: false,
        loading2: false,
        errorMessage: ''
    };

    onApprove = async event => {
        this.setState({ loading1: true });
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
        this.setState({ loading1: false });
    }

    onFinalize = async () => {
        this.setState({ loading2: true });
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();
        
        try {
            await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
        } catch (error) {
            this.setState({ errorMessage: errorMessage });
        }
        this.setState({ loading2: false });
    }

    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props; 
        const readyToFinalize = request.approalCount > approversCount/2;
        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button 
                        color='green' 
                        basic
                        onClick={this.onApprove}
                        loading={this.state.loading1}
                    >
                    Approve
                    </Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button 
                        color='red' 
                        basic
                        onClick={this.onFinalize}
                        loading={this.state.loading2}
                    >
                    Finalize
                    </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}
