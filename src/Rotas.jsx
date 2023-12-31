import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import Home from './views/home/Home';
import ListProduto from './views/produto/ListProduto';

import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';

import FormLogin from './views/login/FormLogin';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-cliente"
                    element={
                        <ProtectedRoute>
                            <ListCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cliente"
                    element={
                        <ProtectedRoute>
                            <FormCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                        <ProtectedRoute>
                            <ListProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-produto"
                    element={
                        <ProtectedRoute>
                            <formProduto />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/list-entregador"
                    element={
                        <ProtectedRoute>
                            <ListEntregador />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/form-entregador"
                    element={
                        <ProtectedRoute>
                            <FormEntregador />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/form-entregador"
                    element={
                        <ProtectedRoute>
                            <FormEntregador />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/list-fornecedor"
                    element={
                        <ProtectedRoute>
                            <ListFornecedor />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/form-fornecedor"
                    element={
                        <ProtectedRoute>
                            <FormFornecedor />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </>
    )
}

export default Rotas
