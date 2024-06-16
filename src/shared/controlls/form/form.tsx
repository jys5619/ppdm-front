import React, { ReactNode } from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'

export interface FormCol {
  label: string
  node: ReactNode
  key?: string
}

interface FormPorps {
  rows: FormCol[][]
}

export function Form({ rows }: FormPorps) {
  return (
    <Table>
      {rows.map((cols, index) => {
        return (
          <Row key={index}>
            {cols.map((col) => {
              return (
                <Col key={uuid()}>
                  <Label>{col.label}</Label>
                  <Control>{col.node}</Control>
                </Col>
              )
            })}
          </Row>
        )
      })}
    </Table>
  )
}

React.memo(Form)

const Table = styled.form`
  border-top: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  border-left: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  border-right: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
`

const Row = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  display: flex;
`

const Col = styled.div`
  flex-grow: 1;
  border-left: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  display: flex;
`

const Label = styled.div`
  padding: 0.6rem;
  width: 20rem;
  border-right: 1px solid ${(props) => props.theme.colors.colorDarkGray};
`

const Control = styled.div`
  flex-grow: 1;
  display: flex;
  justify-items: center;
  padding: 0.3rem;
`
