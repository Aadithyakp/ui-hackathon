'use client';

import { useState, useEffect, useRef } from 'react';

import { Search, Send, Paperclip, Smile, MoreHorizontal, Check, CheckCheck } from 'lucide-react';

interface Message {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

interface Chat {
  id: number;
  name: string;
  role: string;
  avatar: string;
  online: boolean;
  lastMessage: string;
  unread: number;
  typing?: boolean;
}

export default function MessagesPage() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'AI Research Lead',
      avatar: '👩🏻‍🔬',
      online: true,
      lastMessage: 'Hi! I saw your work on neural networks...',
      unread: 0,
      typing: true
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      role: 'ML Engineer',
      avatar: '👨🏽‍💻',
      online: true,
      lastMessage: 'The new model looks promising!',
      unread: 1
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'AI Ethics Researcher',
      avatar: '👩🏼‍🎓',
      online: false,
      lastMessage: 'Let\'s discuss the paper tomorrow',
      unread: 0
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderId: 1,
      content: 'Hi! I saw your work on neural networks. Would love to collaborate!',
      timestamp: '10:30 AM',
      status: 'read'
    },
    {
      id: 2,
      senderId: 0,
      content: 'That sounds great! I\'m currently working on a new architecture.',
      timestamp: '10:32 AM',
      status: 'read'
    }
  ]);

  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate the other person typing and responding
  const simulateResponse = () => {
    // Show typing indicator
    setChats(prev => prev.map(c => 
      c.id === selectedChat ? { ...c, typing: true } : c
    ));

    // After 2 seconds, send the response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        senderId: selectedChat,
        content: 'Thanks for sharing! That sounds really interesting. Would love to hear more about the technical details.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };

      setMessages(prev => [...prev, response]);
      
      // Remove typing indicator
      setChats(prev => prev.map(c => 
        c.id === selectedChat ? { ...c, typing: false, lastMessage: response.content } : c
      ));
    }, 2000);
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      senderId: 0,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate message being delivered and read
    setTimeout(() => {
      setMessages(prev => prev.map(m => 
        m.id === message.id ? { ...m, status: 'delivered' } : m
      ));
    }, 1000);

    setTimeout(() => {
      setMessages(prev => prev.map(m => 
        m.id === message.id ? { ...m, status: 'read' } : m
      ));
    }, 2000);

    // Simulate response
    setTimeout(simulateResponse, 1000);
  };

  return (
    <div className="w-full min-h-full text-white pt-20">
      <div className="h-full max-w-7xl mx-auto px-4">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
          <div className="grid grid-cols-[350px_1fr]">
            {/* Chats List */}
            <div className="border-r border-gray-800/50">
              <div className="p-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="w-full bg-gray-800/50 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-300 placeholder-gray-500 border border-gray-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="space-y-3">
                {chats.map(chat => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full p-6 text-left hover:bg-gray-800/30 transition-colors ${
                      selectedChat === chat.id ? 'bg-gray-800/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <span className="text-2xl">{chat.avatar}</span>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-medium text-gray-100 truncate">{chat.name}</p>
                          <p className="text-xs text-gray-500 whitespace-nowrap">12m</p>
                        </div>
                        <p className="text-xs text-gray-400">{chat.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {chat.typing ? (
                            <p className="text-sm text-blue-400">Typing...</p>
                          ) : (
                            <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                          )}
                          {chat.unread > 0 && (
                            <span className="w-5 h-5 rounded-full bg-blue-500 text-xs flex items-center justify-center">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex flex-col h-[calc(100vh-80px)]">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="text-2xl">{chats.find(c => c.id === selectedChat)?.avatar}</span>
                    {chats.find(c => c.id === selectedChat)?.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium">{chats.find(c => c.id === selectedChat)?.name}</h2>
                    <p className="text-sm text-gray-400">{chats.find(c => c.id === selectedChat)?.role}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-[calc(100vh-280px)] overflow-y-auto p-6 space-y-6">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.senderId === 0
                          ? 'bg-blue-500 text-white ml-12'
                          : 'bg-gray-800/50 text-gray-100 mr-12'
                      }`}
                    >
                      <p>{message.content}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                        {message.senderId === 0 && (
                          <span className="text-xs opacity-70">
                            {message.status === 'sent' && <Check className="h-3 w-3" />}
                            {message.status === 'delivered' && <CheckCheck className="h-3 w-3" />}
                            {message.status === 'read' && <CheckCheck className="h-3 w-3 text-blue-300" />}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-800/50">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                    <Paperclip className="h-5 w-5 text-gray-400" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={e => setNewMessage(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="w-full bg-gray-800/50 rounded-lg pl-4 pr-10 py-2 text-gray-300 placeholder-gray-500 border border-gray-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                    <button className="absolute right-2 top-2 p-1 hover:bg-gray-700/50 rounded transition-colors">
                      <Smile className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                  <button
                    onClick={sendMessage}
                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
