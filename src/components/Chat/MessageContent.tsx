import type { IMessageContent } from '@/db/interface'

// 提取消息渲染逻辑到独立组件
export default function MessageContent({ content }: { content: IMessageContent }) {
  if (typeof content === 'string') {
    return <div className="whitespace-pre-wrap">{content}</div>
  }

  const images = content.filter(item => item.type === 'image_url')
  const texts = content.filter(item => item.type === 'text')

  return (
    <div>
      {images.length > 0 && (
        <>
          <div className="flex gap-1 overflow-x-auto">
            {images.map(item => (
              <img
                key={item.image_url.uid}
                className="object-contain border-solid border-gray-100 rounded-md"
                src={item.image_url.url}
                alt={item.image_url.name}
                width={100}
                height={100}
                loading="lazy"
              />
            ))}
          </div>
          <hr className="my-2" />
        </>
      )}
      {texts.map((item, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {item.text}
        </div>
      ))}
    </div>
  )
}
