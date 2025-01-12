import Chat from '@/components/Chat'
import ConversationsManage from '@/components/Conversations/ConversationsManage'
import Header from '@/components/Header'
import { ActiveConversationIdProvider } from '@/contexts/activeIdConversations'
import { ConversationsProvider } from '@/stores/conversations'
import { ConfigProvider, Layout, theme } from 'antd'
import { useTheme } from './contexts/theme'

function App() {
  const [currentTheme] = useTheme()

  return (
    <ConfigProvider theme={{ algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm, cssVar: true }}>
      <ActiveConversationIdProvider>
        <ConversationsProvider>
          <Layout>
            <div className="w-full h-full">
              <Header />
              <div className="grid w-full h-[var(--mainHeight)] grid-cols-[var(--conversationWidth)_1fr]">
                <div className="shadow h-full">
                  <ConversationsManage />
                </div>
                <Chat />
              </div>
            </div>
          </Layout>
        </ConversationsProvider>
      </ActiveConversationIdProvider>
    </ConfigProvider>
  )
}

export default App
