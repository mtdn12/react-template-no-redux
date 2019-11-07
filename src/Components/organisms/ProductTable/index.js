import React from 'react'
import { object, array } from 'prop-types'
import { Table } from 'antd'

const columns = [{ title: 'Name', dataIndex: 'name' }]

const ProductTable = () => {
  return (
    <div>
      <Table></Table>
    </div>
  )
}

export default ProductTable
