import type { IMessage } from '@/db/interface'
import { Role } from '@/constants'
import { CopyOutlined, DeleteOutlined, SyncOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { useMemo } from 'react'

interface BubbleFooterProps {
  message: IMessage
  onClick?: (buttonName: string, message: IMessage) => void
}

export default function BubbleFooter({ message, onClick }: BubbleFooterProps) {
  const copyButton = useMemo(() => (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<CopyOutlined />}
      onClick={() => {
        onClick?.('copy', message)
      }}
    />
  ), [onClick])

  const refreshButton = useMemo(() => (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<SyncOutlined />}
      onClick={() => {
        onClick?.('refresh', message)
      }}
    />
  ), [onClick])

  const deleteButton = useMemo(() => (
    <Button
      type="text"
      shape="circle"
      size="small"
      icon={<DeleteOutlined />}
      danger
      onClick={() => {
        onClick?.('delete', message)
      }}
    />
  ), [onClick])

  const finallyButtons: React.ReactNode[] = [copyButton]

  if (message.role === Role.AI) {
    finallyButtons.push(refreshButton)
  }

  if (message.role !== Role.SYSTEM) {
    finallyButtons.push(deleteButton)
  }

  return (
    <Flex>
      {...finallyButtons}
    </Flex>
  )
}
