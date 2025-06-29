# replit.md

## Overview

BrandMind is an AI-powered brand identity generator application built for entrepreneurs, startups, and creative professionals. The application takes business ideas and generates complete brand packages including names, slogans, color palettes, fonts, and logo descriptions using OpenAI's GPT-4 API. It's designed as a modern, responsive web application with a clean, professional interface that makes branding accessible without agency costs.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript 
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **External Services**: Supabase for edge functions and OpenAI API for brand generation
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Configured for Replit hosting with development hot-reload

The architecture supports both development and production environments with appropriate middleware and error handling.

## Key Components

### Frontend Architecture
- **Component-based React**: Modular components for brand generation, results display, and marketing sections
- **State Management**: React hooks for local state, React Query for server state
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS with HSL-based design system and dark mode support

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL, currently minimal schema (users table)
- **Storage Interface**: Abstracted storage layer with memory implementation for development
- **Development Tools**: Vite integration for hot module replacement

### External Integrations
- **Supabase**: Edge functions for AI processing, authentication infrastructure ready
- **OpenAI API**: GPT-4 integration for brand identity generation
- **Neon Database**: PostgreSQL hosting with connection pooling

## Data Flow

1. **User Input**: Business idea, industry, and brand tone collected through form
2. **Frontend Processing**: React Query manages API calls and loading states
3. **API Request**: Data sent to Supabase edge function via client
4. **AI Processing**: Supabase function calls OpenAI GPT-4 with structured prompt
5. **Response Handling**: Generated brand identity returned as JSON
6. **UI Update**: Results displayed with copy-to-clipboard functionality
7. **State Management**: Brand results stored in component state for regeneration

The application prioritizes user experience with immediate feedback, loading states, and error handling throughout the flow.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection with WebSocket support
- **drizzle-orm**: Type-safe database queries and schema management
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Accessible UI primitive components
- **class-variance-authority**: Type-safe CSS class variants
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Fast build tool with hot module replacement
- **@replit/vite-plugin-***: Replit-specific development tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production builds

### API Dependencies
- **OpenAI GPT-4**: Brand identity generation
- **Supabase**: Edge functions and potential authentication

## Deployment Strategy

The application is configured for Replit deployment with the following approach:

### Development Environment
- **Hot Reload**: Vite development server with Express middleware integration
- **Environment Variables**: DATABASE_URL and OPENAI_API_KEY required
- **File Watching**: Automatic restart on server file changes
- **Debug Tools**: Replit-specific error overlay and cartographer integration

### Production Build
- **Static Assets**: Vite builds frontend to `dist/public`
- **Server Bundle**: esbuild bundles Express server to `dist/index.js`
- **Database Migration**: Drizzle handles schema changes with `db:push`
- **Environment**: NODE_ENV=production with appropriate optimizations

### Infrastructure Requirements
- **Database**: PostgreSQL instance (Neon recommended)
- **API Keys**: OpenAI API access for brand generation
- **Node.js**: ES modules support with TypeScript compilation
- **Static Hosting**: Integrated with Express for SPA routing

## Changelog

Changelog:
- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.