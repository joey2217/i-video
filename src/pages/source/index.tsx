import { Button, Table } from 'antd'
import React, { memo } from 'react'
import { SOURCES } from '../../utils/constants'
import { setLocalSourceId, getLocalSourceId } from '../../utils'
import type { ColumnsType } from 'antd/es/table'
import { useNavigate } from 'react-router-dom'
import { Source } from '../../types'

const SourcePage: React.FC = () => {
  const navigate = useNavigate()

  const sourceId = getLocalSourceId()

  const onClick = (id: number) => {
    setLocalSourceId(id)
    navigate('/')
  }

  const columns: ColumnsType<Source> = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'api',
      dataIndex: 'api',
      ellipsis: true,
    },
    {
      title: 'action',
      dataIndex: 'action',
      width: 100,
      render: (_, { id }) =>
        sourceId === id
          ? (
          <span className="text-center">当前</span>
            )
          : (
          <Button size="small" type="primary" onClick={() => onClick(id)}>
            选择
          </Button>
            ),
    },
  ]

  return (
    <section>
      <Table columns={columns} dataSource={SOURCES} />
    </section>
  )
}

export default memo(SourcePage)
