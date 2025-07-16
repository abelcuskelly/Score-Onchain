# 🧠 Score Onchain - Mint Your Skills on the Blockchain

Score Onchain is a revolutionary platform that combines skill assessment with blockchain technology. Test your abilities across various domains and mint your achievements as NFTs on the Ethereum blockchain.

## 🌟 Features

- **Comprehensive IQ Assessment**: 15-question cognitive ability test covering pattern recognition, logical reasoning, spatial awareness, and verbal comprehension
- **Blockchain Integration**: Mint your test scores as NFTs on the Ethereum blockchain
- **Web3 Wallet Support**: Connect your MetaMask wallet for seamless blockchain interactions
- **Responsive Design**: Beautiful, modern interface that works on all devices
- **Real-time Scoring**: Immediate results with detailed explanations
- **Leaderboard**: Compare your scores with other users
- **Multiple Quiz Types**: Starting with IQ assessment, expanding to coding, cooking, design, and more

## 🏗️ Project Structure

```
Score Onchain/
├── index.html              # Main landing page
├── styles/
│   └── main.css            # Main stylesheet with responsive design
├── scripts/
│   └── main.js             # Main JavaScript for navigation and wallet connection
├── quizzes/
│   └── iq-quiz.html        # IQ Assessment quiz page
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- MetaMask browser extension (for blockchain features)
- Local web server (optional, for development)

### Installation

1. **Clone or download** the project files to your local machine

2. **Open the website** by navigating to `index.html` in your web browser

3. **For development**, you can use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

4. **Connect your wallet** by clicking the "Connect Wallet" button

## 🎯 How to Use

### Taking the IQ Assessment

1. **Visit the homepage** and click "Start IQ Quiz" or navigate to the Quizzes section
2. **Read the instructions** on the welcome screen
3. **Answer 15 questions** covering various cognitive abilities
4. **Receive your IQ score** with detailed analysis
5. **Connect your wallet** to mint your score as an NFT

### Minting Your Score

1. **Complete any quiz** to receive your score
2. **Connect your MetaMask wallet** if not already connected
3. **Enter your wallet address** in the minting section
4. **Click "Mint IQ Certificate NFT"** to create your blockchain certificate
5. **Confirm the transaction** in MetaMask

## 🧩 Quiz Categories

### Available Now
- **🧠 IQ Assessment** - Comprehensive cognitive ability test (15 questions)

### Coming Soon
- **💻 JavaScript Mastery** - Test your JavaScript knowledge and skills
- **👨‍🍳 Culinary Knowledge** - Cooking techniques and food knowledge
- **🎨 Design Principles** - Understanding of design fundamentals
- **📊 Data Analysis** - Analytical and statistical skills
- **🌍 Geography Expert** - World geography challenge

## 🔧 Technical Details

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript** - Interactive functionality and Web3 integration
- **Web3** - Ethereum blockchain integration via MetaMask

### Design Features
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Accessibility** - WCAG compliant design principles
- **Performance** - Optimized loading and smooth interactions

### Blockchain Features
- **MetaMask Integration** - Secure wallet connection
- **NFT Minting** - Create permanent certificates of achievement
- **Ethereum Compatible** - Works with any Ethereum-compatible network
- **Transaction Verification** - All mints are recorded on-chain

## 🎨 Customization

### Adding New Quizzes

To add a new quiz type:

1. **Create a new HTML file** in the `quizzes/` directory
2. **Copy the structure** from `iq-quiz.html`
3. **Update the questions** and scoring logic
4. **Add the quiz card** to the main page's quiz grid
5. **Update navigation** links

### Styling

The main stylesheet (`styles/main.css`) uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
  --text-color: #333;
  --background-color: #f8f9fa;
}
```

## 🔐 Security Considerations

- **Client-Side Only** - No server-side data storage
- **Wallet Security** - Uses MetaMask for secure key management
- **Local Storage** - Only non-sensitive data cached locally
- **HTTPS Required** - For production deployment with Web3 features

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to empty (static site)
3. Set publish directory to root (`/`)
4. Deploy automatically on commits

### Custom Domain
- Update any relative links if using a custom domain
- Ensure HTTPS is enabled for Web3 functionality
- Test wallet connection on production environment

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/new-quiz`)
3. **Add your changes** (new quiz types, UI improvements, etc.)
4. **Test thoroughly** on different devices and browsers
5. **Submit a pull request** with a clear description

### Contribution Ideas
- New quiz categories (coding challenges, language tests, etc.)
- UI/UX improvements
- Mobile optimization
- Accessibility enhancements
- Integration with other blockchains
- Advanced scoring algorithms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Add your deployment URL here]
- **GitHub Repository**: [Add your repo URL here]
- **Issues & Feedback**: [Add your issues URL here]

## 📞 Support

Having issues? Here are some common solutions:

### Wallet Connection Issues
- Ensure MetaMask is installed and unlocked
- Check that you're on the correct network
- Refresh the page and try again

### Quiz Not Loading
- Check your internet connection
- Clear browser cache
- Try a different browser

### Mobile Display Issues
- Use landscape mode for better quiz experience
- Ensure JavaScript is enabled
- Update to the latest browser version

## 🗺️ Feature Roadmap & To-Do List

### 🚀 Implementation Phases

#### Phase 1: Core Blockchain Integration (Next 2-4 weeks)
- [ ] **Smart Contract Development**
  - [ ] ERC-721 Score Certificate NFT contract
  - [ ] Gas-optimized minting functions
  - [ ] Multi-chain deployment (Ethereum, Polygon, Base)
  - [ ] IPFS integration for metadata storage
- [ ] **Web3 Authentication**
  - [ ] Sign in with Ethereum implementation
  - [ ] User session management
  - [ ] Wallet connection persistence
- [ ] **Real NFT Minting**
  - [ ] Replace simulated minting with actual blockchain transactions
  - [ ] Transaction status tracking
  - [ ] Minting cost optimization
- [ ] **Basic Backend Infrastructure**
  - [ ] Database setup (Supabase/Firebase)
  - [ ] API for score storage and retrieval
  - [ ] User profile data management

#### Phase 2: Enhanced User Experience (1-2 months)
- [ ] **New Quiz Categories**
  - [ ] JavaScript/Programming assessments
  - [ ] Personality tests (Big 5, MBTI-style)
  - [ ] General knowledge trivia
  - [ ] Language skills evaluation
  - [ ] Mathematical reasoning
- [ ] **User Profiles & History**
  - [ ] Profile pages with all minted scores
  - [ ] Score progression tracking
  - [ ] ENS name integration
  - [ ] Achievement galleries
- [ ] **Leaderboard System**
  - [ ] Global rankings by quiz type
  - [ ] Time-based leaderboards (weekly/monthly)
  - [ ] Filtering and search functionality
  - [ ] Top performer rewards
- [ ] **Advanced Analytics**
  - [ ] Detailed score breakdowns
  - [ ] Percentile rankings
  - [ ] Performance charts and visualizations
  - [ ] Category-specific insights

#### Phase 3: Social & Gamification (2-3 months)
- [ ] **Social Features**
  - [ ] Custom share cards with actual scores
  - [ ] Challenge friends functionality
  - [ ] Social media integrations
  - [ ] Community features
- [ ] **Achievement System**
  - [ ] XP and leveling system
  - [ ] Achievement badges and NFTs
  - [ ] Daily challenges and streaks
  - [ ] Special event quizzes
- [ ] **Progressive Web App**
  - [ ] Offline capability
  - [ ] Mobile app experience
  - [ ] Push notifications
  - [ ] Background sync
- [ ] **Additional Quiz Types**
  - [ ] Expand to 10+ categories
  - [ ] Specialized professional assessments
  - [ ] Creative and artistic evaluations

#### Phase 4: Platform Expansion (3-6 months)
- [ ] **Marketplace Features**
  - [ ] NFT marketplace for rare scores
  - [ ] Trading and auction system
  - [ ] Score verification services
- [ ] **Developer Ecosystem**
  - [ ] Public API for quiz integration
  - [ ] SDK for embedding quizzes
  - [ ] Webhook system
  - [ ] Third-party quiz creation tools
- [ ] **Advanced Features**
  - [ ] Multi-language support
  - [ ] Voice-based quizzes
  - [ ] Team/collaborative assessments
  - [ ] AR/VR quiz experiences
- [ ] **DAO & Governance**
  - [ ] Governance token launch
  - [ ] Community quiz curation
  - [ ] Protocol revenue sharing
  - [ ] Decentralized quiz validation

### 🤖 AI-Generated Personalized Assessments (Special Feature)

#### Core AI Features
- [ ] **Adaptive Question Generation**
  - [ ] GPT-4 integration for dynamic questions
  - [ ] Difficulty scaling based on performance
  - [ ] Real-time question adaptation
  - [ ] Context-aware content generation
- [ ] **Personalization Engine**
  - [ ] User interest profiling
  - [ ] Learning style detection
  - [ ] Cultural/regional adaptation
  - [ ] Industry-specific customization
- [ ] **AI Implementation Phases**
  - [ ] Phase 1: Prompt engineering with GPT-4
  - [ ] Phase 2: Fine-tuned custom model
  - [ ] Phase 3: Hybrid AI-human validation
  - [ ] Phase 4: Fully autonomous generation

#### AI Quiz Types
- [ ] **Dynamic Categories**
  - [ ] Interest-based IQ tests
  - [ ] Career-specific assessments
  - [ ] Adaptive skill evaluations
  - [ ] Personalized learning paths
- [ ] **Progressive Assessments**
  - [ ] Multi-session skill mapping
  - [ ] Improvement tracking
  - [ ] Weakness targeting
  - [ ] Mastery challenges
- [ ] **Unique NFT Value**
  - [ ] One-of-a-kind question sets
  - [ ] AI generation proof on-chain
  - [ ] Personalization metadata
  - [ ] Rarity based on uniqueness

### ⚡ Quick Wins (Immediate Implementation)
- [ ] Google Analytics integration
- [ ] SEO improvements (sitemap, meta tags)
- [ ] Loading animations and transitions
- [ ] Quiz timer functionality
- [ ] Sound effects for feedback
- [ ] Dark mode theme
- [ ] Keyboard navigation
- [ ] Result image generation
- [ ] Email capture for updates
- [ ] Social proof (user count, testimonials)

### 💎 Unique Differentiators to Explore
- [ ] **AI-Generated Quizzes** - Infinite personalized assessments
- [ ] **Cross-Platform Score Portability** - Use scores in games/apps
- [ ] **Corporate Training Integration** - B2B assessment platform
- [ ] **Scholarship/Job Matching** - Connect high scorers with opportunities
- [ ] **Score Staking** - Stake NFTs for rewards and access
- [ ] **Skill-to-Earn** - Monetize high scores
- [ ] **Decentralized Verification** - Third-party score validation
- [ ] **Meta-Learning Insights** - AI coaching based on performance

### 🔧 Technical Improvements
- [ ] **Performance**
  - [ ] Code splitting and lazy loading
  - [ ] Image optimization
  - [ ] Caching strategies
  - [ ] CDN implementation
- [ ] **Security**
  - [ ] Anti-cheat mechanisms
  - [ ] Rate limiting
  - [ ] Input validation
  - [ ] Smart contract audits
- [ ] **Scalability**
  - [ ] Microservices architecture
  - [ ] Database optimization
  - [ ] Load balancing
  - [ ] Horizontal scaling ready

### 📊 Analytics & Monitoring
- [ ] User behavior tracking
- [ ] Quiz completion rates
- [ ] Minting conversion metrics
- [ ] Performance monitoring
- [ ] Error tracking and reporting
- [ ] A/B testing framework
- [ ] User feedback system

### 💰 Monetization Features
- [ ] Premium quiz categories
- [ ] Verified score certificates
- [ ] Corporate/enterprise packages
- [ ] API access tiers
- [ ] Sponsored assessments
- [ ] NFT trading fees
- [ ] Premium AI personalization
- [ ] White-label solutions

### 🌍 Community & Growth
- [ ] Discord community server
- [ ] Ambassador program
- [ ] Content creator partnerships
- [ ] Educational institution integration
- [ ] Influencer collaborations
- [ ] Referral system
- [ ] Community-created quizzes
- [ ] Regular assessment events

---

Built with ❤️ for the Web3 community. Mint your achievements and prove your skills on the blockchain! 🚀 