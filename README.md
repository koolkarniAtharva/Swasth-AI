# 🌿 Swasth-AI

> **Intelligent Medicinal Plant Identification & Ayurvedic Remedy Recommendation System**

Swasth-AI is a comprehensive full-stack application designed to identify medicinal plants from images using deep learning (EfficientNet B0) and provide personalized Ayurvedic remedies through an intelligent RAG system powered by Perplexity AI. It combines modern AI technology with traditional Ayurvedic knowledge to support plant-based wellness.

---

## 🎯 Core Features

### 🔍 Plant Identification
- Upload plant/leaf images to identify medicinal plants with 88+ recognized species
- Image preprocessing with automatic background removal (RemBG)
- EfficientNet B0 deep learning model for high-accuracy classification
- Returns top 5 predictions with confidence scores
- Supports JPG, PNG, and other common image formats

### 💊 Ayurvedic Remedy Recommendations
- Search by symptoms (headache, cough, fever, fatigue, etc.)
- RAG-powered system retrieves relevant Ayurvedic knowledge from Chroma vector database
- Perplexity AI generates structured remedy recommendations with:
  - Remedy & preparation methods
  - Dosage instructions
  - Additional suggestions
  - Severity assessment

### 🌱 Plant Growing Guide
- Browse 88+ medicinal plant species with difficulty levels
- Detailed care instructions for each plant stage:
  - **Planting** - Seed/sapling preparation and soil requirements
  - **Watering** - Frequency and techniques
  - **Sunlight** - Light requirements and placement
  - **Fertilizing** - Nutrient management
  - **Harvesting** - Timing and methods
- Search plants by name and health benefits
- Plant difficulty levels (Easy, Medium, Hard) for beginner to expert gardeners

### 👤 User Management
- Secure authentication with multiple methods:
  - Email/Password registration
  - GitHub OAuth
  - Google OAuth
- User session management
- Persistent user data

### 🎨 User Experience
- Dark/Light theme toggle
- Responsive mobile-first design
- Real-time feedback and notifications (Sonner toast notifications)
- Intuitive navigation

---

## 🏗️ Technology Stack

### Frontend
| Component | Technology |
|-----------|-----------|
| **Framework** | Next.js 15 (React 19) with TypeScript |
| **Styling** | Tailwind CSS + PostCSS |
| **UI Components** | Radix UI + shadcn/ui (40+ components) |
| **Auth** | Better Auth + Next Auth with OAuth |
| **Database ORM** | Drizzle ORM with PostgreSQL (Neon) |
| **HTTP Client** | Axios |
| **State Management** | React Hooks |
| **Forms** | React Hook Form + Zod validation |
| **Theme** | next-themes (Light/Dark) |
| **Date Library** | date-fns |
| **Icons** | Lucide React |

### Backend
| Component | Technology |
|-----------|-----------|
| **Framework** | FastAPI + Uvicorn |
| **Language** | Python 3.8+ |
| **Image Processing** | Pillow, RemBG (background removal) |
| **ML Inference** | TensorFlow/Keras (EfficientNet B0, MobileNet) |
| **Numerical Computing** | NumPy |
| **Vector Database** | Chroma DB (SQLite persistence) |
| **RAG Orchestration** | LangChain |
| **Embeddings** | Sentence Transformers (all-MiniLM-L6-v2) |
| **LLM** | Perplexity AI (sonar-pro model) |
| **Environment** | Python-dotenv |

---

## 📁 Complete Project Structure

```
Swasth-AI/
├── 📁 frontend/                          # Next.js Full-Stack Frontend
│   ├── 📁 src/
│   │   ├── 📁 app/                      # App Router (Next.js 13+ file-based routing)
│   │   │   ├── 📁 (auth)/              # Auth layout group
│   │   │   │   ├── sign-in/page.tsx     # Login page
│   │   │   │   └── sign-up/page.tsx     # Registration page
│   │   │   ├── 📁 api/auth/[...all]/   # Authentication API handler
│   │   │   │   └── route.ts             # Better Auth integration
│   │   │   ├── identify-plant/page.tsx  # Plant ID with image upload
│   │   │   ├── grow-plant/page.tsx      # Plant growing guide
│   │   │   ├── ayurvedic-remedy/page.tsx # Remedy recommendations
│   │   │   ├── page.tsx                 # Home page
│   │   │   ├── layout.tsx               # Root layout
│   │   │   └── globals.css              # Global styles
│   │   ├── 📁 actions/
│   │   │   └── plant.ts                 # Server actions for plant DB queries
│   │   ├── 📁 components/
│   │   │   ├── theme-provider.tsx
│   │   │   └── 📁 ui/                  # shadcn/ui components (40+ components)
│   │   │       ├── accordion.tsx, alert.tsx, button.tsx, dialog.tsx
│   │   │       ├── form.tsx, input.tsx, select.tsx, card.tsx, etc.
│   │   │       └── ... (see folder for complete list)
│   │   ├── 📁 db/
│   │   │   ├── index.ts                # Drizzle DB client initialization
│   │   │   └── schema.ts               # Database schema (user, plant, care)
│   │   ├── 📁 lib/
│   │   │   ├── auth.ts                 # Better Auth configuration
│   │   │   ├── auth-client.ts          # Client-side auth utils
│   │   │   └── utils.ts                # General utilities
│   │   ├── 📁 hooks/
│   │   │   └── use-mobile.tsx          # Mobile detection hook
│   │   └── 📁 modules/
│   │       ├── 📁 auth/ui/views/
│   │       │   ├── sign-in-view.tsx
│   │       │   └── sign-up-view.tsx
│   │       └── 📁 home/ui/views/
│   │           └── home-view.tsx
│   ├── 📁 public/
│   │   └── 📁 models/
│   │       └── simple_mobilenet_classifier/
│   │           ├── model.json
│   │           └── *.bin (weight files)
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── next.config.ts
│   ├── drizzle.config.ts
│   ├── eslint.config.mjs
│   └── postcss.config.mjs
│
├── 📁 backend/                          # FastAPI Python Backend
│   ├── main.py                         # FastAPI app with endpoints
│   ├── requirements.txt                # Python dependencies
│   ├── 📁 chroma_db_nccn/             # RAG system
│   │   ├── __init__.py
│   │   ├── rag.py                     # RAG pipeline (retrieval + generation)
│   │   ├── chroma.sqlite3             # Vector DB persistence
│   │   └── [UUID]/                    # Chroma embedding collections
│   ├── efficientnet_b0_final_nb.keras  # Primary plant classification model
│   ├── simple_mobilenet_classifier.h5  # Fallback classification model
│   ├── PLANT_MODEL_SETUP.md            # Model setup documentation
│   ├── convert_h5_to_tfjs.py          # Model format converter (Keras→TF.js)
│   ├── convert_via_savedmodel.py      # Alternative conversion method
│   ├── fix_model_json.py              # Model JSON validation/fixing
│   ├── test_rag.py                    # RAG system testing script
│   ├── predictions.ipynb              # Jupyter analysis notebook
│   └── Simple_BE.ipynb                # Backend exploration notebook
│
├── start-dev.sh                         # Automated dev environment startup
└── README.md                            # This file
```

---

## 📊 Database Schema

Using **Drizzle ORM** with **PostgreSQL** (Neon Database):

### Core Tables

```sql
-- Users table (Better Auth)
user (
  id: UUID (primary key)
  name: string
  email: string (unique)
  emailVerified: boolean
  image: URL (optional)
  createdAt: timestamp
  updatedAt: timestamp
)

-- Sessions (Better Auth)
session (
  id: UUID (primary key)
  token: string (unique)
  userId: UUID (FK → user)
  expiresAt: timestamp
  ipAddress: string
  userAgent: string
)

-- OAuth Accounts (Better Auth)
account (
  id: UUID (primary key)
  userId: UUID (FK → user)
  providerId: string (github, google)
  accessToken, refreshToken, idToken
  scope, password, expiry times
)

-- Email Verification (Better Auth)
verification (
  id: UUID (primary key)
  identifier: string
  value: string
  expiresAt: timestamp
)

-- Medicinal Plants
plants (
  id: UUID (primary key)
  name: string (unique) -- e.g., "Neem", "Tulsi", "Turmeric"
  difficulty: string -- "Easy", "Medium", "Hard"
  benefits: array[string] -- ["Immune boost", "Anti-inflammatory"]
  image: URL
  timestamps
)

-- Plant Care Instructions
careInstructions (
  id: UUID (primary key)
  plantId: UUID (FK → plants)
  stage: string -- "planting", "watering", "sunlight", "fertilizing", "harvesting"
  title: string
  steps: array[string] -- Step-by-step instructions
  tips: array[string] -- Expert tips
  timestamps
)
```

---

## 🚀 Getting Started

### Prerequisites

Before starting, ensure you have:

- **Node.js**: v18+ ([Download](https://nodejs.org/))
- **Python**: 3.8+ ([Download](https://www.python.org/))
- **npm/yarn**: Latest version
- **Git**: For version control
- **PostgreSQL Database**: Use [Neon](https://neon.tech/) (free tier available)

### 📋 Environment Setup

#### Backend `.env`
```env
# Perplexity AI (for remedy generation)
PERPLEXITY_API_KEY=pplx-...

# Database (optional, if using PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/swasthai

# RAG System
CHROMA_DB_PATH=./chroma_db_nccn
```

#### Frontend `.env.local`
```env
# API Gateway
NEXT_PUBLIC_API_URL=http://localhost:8000

# Better Auth Configuration
BETTER_AUTH_SECRET=your_random_32_char_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://neon_user:password@ep-xxx.neon.tech/swasthai?sslmode=require

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_oauth_app_id
GITHUB_CLIENT_SECRET=your_github_oauth_app_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_oauth_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

### 🎯 Quick Start (Automated)

```bash
# Clone repository
git clone <repo-url>
cd Swasth-AI

# Run automated setup script
chmod +x start-dev.sh
./start-dev.sh
```

**What the script does:**
1. ✅ Installs Python backend dependencies
2. ✅ Starts FastAPI backend (http://localhost:8000)
3. ✅ Installs Node.js frontend dependencies
4. ✅ Starts Next.js dev server (http://localhost:3000)

### 🔧 Manual Setup

#### Backend Setup

```bash
cd backend

# 1. Create virtual environment
python -m venv venv

# 2. Activate it
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Create .env file
echo "PERPLEXITY_API_KEY=pplx-..." > .env

# 5. Start the server
python main.py
# Server runs on: http://localhost:8000
# API docs: http://localhost:8000/docs
```

#### Frontend Setup

```bash
cd frontend

# 1. Install dependencies
npm install
# or
yarn install

# 2. Create .env.local (see template above)
# (Copy contents from "Frontend .env.local" section)

# 3. Sync database schema
npm run db:push

# 4. Start dev server
npm run dev
# Frontend runs on: http://localhost:3000
```

---

## 📡 REST API Endpoints

### 🔍 Plant Identification
```http
POST /api/identify
Content-Type: multipart/form-data

{
  file: [Image file - JPG/PNG]
}

Response:
{
  "success": true,
  "predictions": [
    { "label": "Neem", "score": 0.95 },
    { "label": "Tulsi", "score": 0.03 },
    { "label": "Basil", "score": 0.01 },
    { "label": "Mint", "score": 0.005 },
    { "label": "Turmeric", "score": 0.004 }
  ]
}
```

### 💊 Remedy Recommendations
```http
POST /api/remedy
Content-Type: application/json

{
  "symptoms": "headache and fever"
}

Response:
{
  "response": "**Remedy & Preparation**\n1. Tulsi tea: Boil 5-7 leaves...\n\n**Dosage**\nDrink 2-3 times daily...\n\n**Suggestions**\nRest and stay hydrated...\n\n**Severity**\nMild to Moderate"
}
```

---

## 🛠️ Available Commands

### Frontend Scripts

```bash
npm run dev              # 🚀 Start dev server (localhost:3000)
npm run build            # 📦 Production build
npm start                # Start production server
npm run lint             # 🔍 ESLint code quality check
npm run db:push         # 🗄️ Sync DB schema to Neon
npm run db:studio       # 📊 Open Drizzle Studio for DB management
```

### Backend Scripts

```bash
python main.py                      # 🚀 Start FastAPI server
python test_rag.py                 # 🧪 Test RAG system
python convert_h5_to_tfjs.py       # 🔄 Convert model to TF.js
python convert_via_savedmodel.py  # 🔄 Alternative model conversion
python fix_model_json.py           # 🔧 Fix model JSON config
jupyter notebook                   # 📊 Launch Jupyter for analysis
```

---

## 🤖 ML Model Details

### Plant Classification Models

**Primary: EfficientNet B0** (`efficientnet_b0_final_nb.keras`)
- Architecture: EfficientNet B0 (efficient + high accuracy)
- Input: 224×224 RGB images
- Output: 88 plant classes
- Process:
  1. Background removal with RemBG
  2. Automatic cropping to plant region
  3. Padding and resizing to 224×224
  4. EfficientNet preprocessing and inference
  5. Top-5 predictions with confidence scores

**Fallback: MobileNet** (`simple_mobilenet_classifier.h5`)
- Lightweight alternative for faster inference
- Better for mobile/edge devices

### Supported Plant Species (88 total)

Common names include:
- **Herbs**: Tulsi, Mint, Basil, Thyme, Lemongrass
- **Root crops**: Turmeric, Ginger, Garlic, Onion
- **Leafy greens**: Spinach, Palak, Neem
- **Flowering**: Rose, Hibiscus, Jasmine, Marigold
- **Medicinal**: Aloe Vera, Amla, Neem, Ashoka
- **Spices**: Pepper, Cumin, Coriander, Chilly
- And more...

### Model Inference Pipeline

```python
# Image Preprocessing
1. Load image from upload
2. Remove background (RemBG)
3. Crop to plant bounding box
4. Resize with padding to 224×224
5. Normalize (EfficientNet preprocess_input)

# Prediction
6. Run through EfficientNet B0 model
7. Get probability distribution across 88 classes
8. Return top-5 predictions with scores
```

---

## 🧠 RAG System Architecture

### Components

1. **Vector Database (Chroma DB)**
   - Stores Ayurvedic knowledge embeddings
   - Uses SQLite for persistence
   - Auto-detects collections from database

2. **Embeddings Model**
   - Model: `sentence-transformers/all-MiniLM-L6-v2`
   - Converts text to 384-dimensional vectors
   - Runs on CPU for accessibility

3. **Retrieval**
   - K-nearest neighbor search (k=3)
   - Returns most relevant Ayurvedic documents

4. **Generation**
   - LLM: Perplexity AI (`sonar-pro` model)
   - System prompt: Constrained to medical context
   - Structured output format (Remedy → Dosage → Suggestions → Severity)

### RAG Flow

```
User Input (Symptom)
    ↓
Embedding (sentence-transformers)
    ↓
Vector Search (Chroma DB) → Top-3 Documents
    ↓
Context Assembly
    ↓
Perplexity API Call (with context)
    ↓
Structured Response Generation
    ↓
Return to Frontend
```

---

## 🔐 Authentication Flow

### Better Auth Configuration

```typescript
// Supported Methods:
1. Email & Password
   - Sign up with email/password
   - Email verification
   - Password reset

2. GitHub OAuth
   - Redirect to GitHub
   - Authorize app
   - Create/link user account

3. Google OAuth
   - Redirect to Google
   - Consent screen
   - Create/link user account

// Session Management
- JWT tokens with refresh tokens
- HTTP-only cookies for security
- Automatic session expiry (configurable)
- CSRF protection
```

---

## 📱 Frontend Pages

### 🏠 Home Page (`/`)
- Welcome screen
- Feature highlights
- CTA buttons to main features
- User session display

### 🔑 Authentication Pages (`/(auth)`)
- **Sign In** (`/sign-in`) - Login with email/GitHub/Google
- **Sign Up** (`/sign-up`) - Registration
- Form validation with Zod
- OAuth provider integration
- Redirect after auth success

### 🔍 Plant Identification (`/identify-plant`)
- Image upload interface
- Real-time preview
- EfficientNet B0 inference
- Top-5 predictions display
- Confidence score visualization
- Loading states and error handling

### 🌱 Plant Growing Guide (`/grow-plant`)
- Browse 88+ medicinal plants
- Search by name/benefits
- Difficulty level filtering
- Care instruction tabs:
  - Planting
  - Watering
  - Sunlight
  - Fertilizing
  - Harvesting
- Step-by-step guides
- Expert tips

### 💊 Ayurvedic Remedy (`/ayurvedic-remedy`)
- Symptom search interface
- Common symptoms quick-select
- AI-powered remedy generation (RAG)
- Structured remedy output:
  - Preparation methods
  - Dosage
  - Additional suggestions
  - Severity assessment
- Loading and error states

---

## 🎨 UI/UX Features

### Component Library
- 40+ pre-built shadcn/ui components
- Radix UI primitives for accessibility
- Consistent design system
- Theme support (light/dark)

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interactions
- Adaptive layouts

### Accessibility
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Screen reader support

### User Feedback
- Sonner toast notifications
- Loading indicators
- Error boundaries
- Input validation feedback

---

## 🐛 Troubleshooting

### Backend Issues

**❌ "Port 8000 already in use"**
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Linux/macOS
lsof -i :8000
kill -9 <PID>
```

**❌ "Module 'tensorflow' not found"**
```bash
# Reinstall TensorFlow
pip uninstall tensorflow tf-keras
pip install tensorflow tf-keras
```

**❌ "Perplexity API key invalid"**
```bash
# Get new key from https://www.perplexity.ai/api
# Update .env: PERPLEXITY_API_KEY=pplx-...
```

**❌ "Model file not found"**
```bash
# Ensure model file exists in backend/
# Check path in main.py: model_file = "efficientnet_b0_final_nb.keras"
# Download from project drive if missing
```

### Frontend Issues

**❌ "Port 3000 already in use"**
```bash
npm run dev -- -p 3001  # Use alternate port
```

**❌ "DATABASE_URL not found"**
```bash
# Create .env.local in frontend/
# Copy template from Backend Setup section
# Verify Neon connection string
npm run db:push  # Sync schema
```

**❌ "NextAuth session not loading"**
```bash
# Clear browser cookies and local storage
# Verify BETTER_AUTH_SECRET is >= 32 characters
# Check BETTER_AUTH_URL matches your domain
```

**❌ "Plant image upload fails"**
```bash
# Check backend is running (http://localhost:8000/docs)
# Verify NEXT_PUBLIC_API_URL in .env.local
# Check browser console for CORS errors
# Image size should be < 5MB
```

### Database Issues

**❌ "Can't connect to Neon"**
```bash
# Verify DATABASE_URL format:
# postgresql://username:password@hostname/dbname?sslmode=require

# Test connection:
npm run db:studio

# If needed, regenerate password on Neon dashboard
```

**❌ "Schema sync failed"**
```bash
npm run db:push -- --force  # Force sync
# Or use Drizzle Studio to inspect
npm run db:studio
```

---

## 📚 Learning Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [FastAPI Guide](https://fastapi.tiangolo.com/)
- [TensorFlow.js](https://www.tensorflow.org/js/guide)
- [LangChain Documentation](https://python.langchain.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Chroma DB](https://docs.trychroma.com/)

### AI/ML Resources
- [EfficientNet Paper](https://arxiv.org/abs/1905.11946)
- [RAG Architecture](https://arxiv.org/abs/2005.11401)
- [Sentence Transformers](https://www.sbert.net/)

### Ayurvedic Reference
- [NCCIH - Ayurvedic Medicine](https://www.nccih.nih.gov/health/ayurveda)
- [Traditional Knowledge Digital Library](https://tkdl.res.in/)

---

## 🤝 Contributing

We welcome contributions! Please follow this workflow:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/YourFeature`
3. **Commit** changes: `git commit -m "Add YourFeature"`
4. **Push** to branch: `git push origin feature/YourFeature`
5. **Open** a Pull Request with detailed description

### Code Style Guidelines
- Frontend: Follow ESLint config (`npm run lint`)
- Backend: PEP 8 style with 4-space indentation
- Commit messages: Use conventional commits (feat:, fix:, docs:, etc.)

---

## 📄 License

This project is created as part of a **Final Year Academic Project**. All intellectual property rights are reserved.

---

## 📧 Support & Contact

For questions, bug reports, or feature requests:
- 📝 Open an issue on GitHub
- 💬 Contact the development team through project channels
- 📱 Check project documentation first

---

## 🎯 Project Status

- **Version**: 0.1.0
- **Status**: 🚀 Active Development
- **Last Updated**: June 2026
- **Node Version**: v18+
- **Python Version**: 3.8+

---

**Made with ❤️ for health and wellness through technology**
