import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
export default function FormCliente () {
    const [codigo, setCodigo] = useState();
    const [titulo, setTitulo] = useState();
    const [descricao,setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo,setTempoEntregaMaximo] = useState();
    
    
    function salvar() {

        let produtoRequest = {
            codigo: codigo,
            titulo: titulo,
            descricao:descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo,
        }

        axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}
    return (

        <div>


        <MenuSistema />
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
                                    value={titulo}onChange={e => setTitulo(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='codigo do produto'
                                    value={codigo}onChange={e => setCodigo(e.target.value)}
                                    >
                                        
                                    <InputMask
                                        required
                                        placeholder=" informe  código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>

        <Form.TextArea label='Descrição' placeholder='Informe a descrição do produto' 
        value={descricao}onChange={e => setDescricao(e.target.value)}
        
        />
                            
                            <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor unitario'
                                    width={6}
                                    value={valorUnitario}onChange={e => setValorUnitario(e.target.value)}
                                    >
                                    <InputMask 
                                       
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='tempo de entrega minima em minutos'
                                    width={6}
                                    value={tempoEntregaMinimo}onChange={e => setTempoEntregaMaximo(e.target.value)}
                                >
                                    <InputMask 
                                       
                                        
                                        placeholder="30"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='tempo de entrega maxima em minutos'
                                    width={6}
                                    value={tempoEntregaMaximo}onChange={e => setTempoEntregaMinimo(e.target.value)}
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
                                <Link to={'/list-produto'}>Voltar</Link>
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
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
