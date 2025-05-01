import React, { useState } from 'react';
import './ChatInterface.css';
import { FaRedo, FaThumbsUp, FaThumbsDown, FaTasks, FaVolumeUp, FaChartLine, FaCheck, FaArrowUp } from 'react-icons/fa';
import { HiDocumentText, HiPresentationChartBar } from 'react-icons/hi';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        setMessages([...messages, { text: inputValue, isUser: true }]);
        setInputValue('');

        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "Here's some advice on that... [AI response would go here]", 
                isUser: false 
            }]);
        }, 1000);
    };

    const quickQuestions = [
        "How do I handle objections?",
        "Give me a solid email template",
        "Charity text/English",
        "Negotiation tips"
    ];

    return (
        <section className="chat-section container">
            <div className="chat-header">
                <span className="header-small">Live AI Coach</span>
                <h2 className="header-large">Take a Suggestion Coaching</h2>
            </div>
            
            <div className="chat-main-container">
                <div className="chat-container">
                    <div className="chat-header-box">
                        <h2 className="chat-title">AI Sales Coach</h2>
                    </div>
                    <div className="chat-window">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.isUser ? 'user' : 'ai'}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    
                    <div className="quick-questions">
                        {quickQuestions.map((question, index) => (
                            <button 
                                key={index} 
                                className="quick-question-btn"
                                onClick={() => setInputValue(question)}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                    
                    <div className="message-form-container">
                        <form onSubmit={handleSendMessage} className="message-form">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask anything you need"
                            />
                            <button type="submit" className="send-btn">
                                Send <FaArrowUp />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="controls-column">
                    <button className="control-btn" title="Restart"><FaRedo /></button>
                    <button className="control-btn" title="Like"><FaThumbsUp /></button>
                    <button className="control-btn" title="Dislike"><FaThumbsDown /></button>
                    <button className="control-btn" title="Task"><FaTasks /></button>
                    <button className="control-btn" title="Volume"><FaVolumeUp /></button>
                </div>
                
                <div className="analysis-container">
                    <div className="analysis-section">
                        <h3>Real-time Analysis</h3>
                        <div className="analysis-item">
                            <div className="analysis-header">
                                <div className="check-circle">
                                    <FaCheck className="check-icon" />
                                </div>
                                <span>Confidence Level</span>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '60%' }}></div>
                                </div>
                                <span className="progress-percent">60%</span>
                            </div>
                        </div>
                        <div className="analysis-item">
                            <div className="analysis-header">
                                <FaChartLine className="analysis-icon" />
                                <span>Confidence Level</span>
                            </div>
                            <div className='text-color'>
                                <span>85% improvement in objection handling</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="quick-actions-section">
                        <h3>Quick Actions</h3>
                        <div className="quick-actions-grid">
                            <button className="action-btn">
                                <HiDocumentText className="action-icon" />
                                Generate Script
                            </button>
                            <button className="action-btn">
                                <HiPresentationChartBar className="action-icon" />
                                Practice Pitch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatInterface;