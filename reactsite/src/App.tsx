import React, { useState, useEffect } from 'react'
import { Table, Button, TableColumnsType } from 'antd'
import './App.css'

const data = [
  { name: 'John', age: 25, address: '123 Street' },
  { name: 'Bob', age: 40, address: '789 Road' },
  { name: 'John', age: 25, address: '123 Street' },
  { name: 'Jane', age: 30, address: '456 Avenue' },
  { name: 'Bob', age: 40, address: '789 Road' },
  { name: 'Alice', age: 35, address: '321 Boulevard' },
  { name: 'David', age: 28, address: '555 Court' },
  { name: 'Eva', age: 33, address: '678 Lane' },
  { name: 'Michael', age: 45, address: '910 Drive' },
  { name: 'Sarah', age: 29, address: '222 Terrace' },
  { name: 'Ryan', age: 32, address: '333 Circle' },
  { name: 'Olivia', age: 37, address: '444 Lane' },
  { name: 'Liam', age: 31, address: '555 Place' },
  { name: 'Sophia', age: 36, address: '666 Road' },
  { name: 'James', age: 42, address: '777 Avenue' },
  { name: 'Emily', age: 27, address: '888 Street' },
  { name: 'Matthew', age: 34, address: '999 Court' },
  { name: 'Ava', age: 39, address: '000 Drive' },
  { name: 'Daniel', age: 26, address: '111 Terrace' },
  { name: 'Chloe', age: 41, address: '222 Circle' },
  { name: 'Benjamin', age: 38, address: '333 Boulevard' },
  { name: 'Mia', age: 43, address: '444 Place' },
  { name: 'William', age: 24, address: '555 Lane' },
  { name: 'Amelia', age: 46, address: '666 Road' },
  { name: 'Ethan', age: 23, address: '777 Avenue' },
  { name: 'Victoria', age: 44, address: '888 Street' },
  { name: 'Madison', age: 22, address: '999 Court' },
  { name: 'Aiden', age: 47, address: '000 Drive' },
  { name: 'Grace', age: 21, address: '111 Terrace' },
  { name: 'Logan', age: 48, address: '222 Circle' },
  { name: 'Natalie', age: 20, address: '333 Boulevard' },
  // add more data as needed
]

const App = () => {
  const [tableData, setTableData] = useState<
    { name: string; age: number; address: string }[]
  >([])
  const [page, setPage] = useState(1)

  const limit = 10

  const fetchTableData = (offset: number, limit: number) => {
    const startIndex = offset
    const endIndex = offset + limit
    const dataSlice: { name: string; age: number; address: string }[] =
      data.slice(startIndex, endIndex)
    setTableData(dataSlice)
  }

  useEffect(() => {
    fetchTableData(0, limit)
  }, [])

  const handlePrevious = () => {
    if (page > 1) {
      const offset = (page - 2) * limit
      fetchTableData(offset, limit)
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    const offset = page * limit
    fetchTableData(offset, limit)
    setPage(page + 1)
  }

  const columns: TableColumnsType<{
    name: string
    age: number
    address: string
  }> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={tableData} />
      <div className="pagination">
        <Button onClick={handlePrevious} disabled={page === 1}>
          Назад
        </Button>
        <span className="page-number">Страница: {page}</span>
        <Button onClick={handleNext}>Вперёд</Button>
      </div>
    </div>
  )
}

export default App
