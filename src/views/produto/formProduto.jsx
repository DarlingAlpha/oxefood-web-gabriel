import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    placeholder="informe o titulo do produto"
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='codigo do produto'>
                                        
                                    <InputMask
                                        required
                                        placeholder=" informe  código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='descrição'
                                    width={7}>
                                    <InputMask 
                    
                                        placeholder="informe a descrição do produto"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor unitario'
                                    width={6}>
                                    <InputMask 
                                       
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='tempo de entrega minima em minutos'
                                    width={6}
                                >
                                    <InputMask 
                                       
                                        
                                        placeholder="30"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='tempo de entrega maxima em minutos'
                                    width={6}
                                >
                                    <InputMask 
                         
                                        
                                        placeholder="40"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
