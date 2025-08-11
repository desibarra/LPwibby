# Overview

Wibby is a SaaS CRM platform designed specifically for WhatsApp Business communications. The application transforms a standard WhatsApp number into a professional sales and customer service tool by providing a shared inbox for teams, conversation management, analytics, and AI-powered assistance. The platform addresses the common problem of using personal messaging apps for business purposes, which leads to disorganization, lack of accountability, and missed sales opportunities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client application is built using React with TypeScript, leveraging modern React patterns and hooks. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing a consistent and accessible design system. The application uses Wouter for client-side routing, which is lightweight and suitable for single-page applications. State management is handled through React Query (TanStack Query) for server state and React's built-in state management for local component state.

The design follows a dark theme aesthetic with custom CSS variables for consistent branding, particularly using green accent colors to align with WhatsApp's visual identity. The application includes animated components using custom CSS animations and intersection observers for scroll-triggered effects.

## Backend Architecture
The server is built with Express.js and follows a RESTful API design pattern. The application uses a modular route structure where API endpoints are registered through a centralized routing system. Currently implements in-memory storage for development purposes, but is structured to easily migrate to a database-backed solution using Drizzle ORM with PostgreSQL.

The server includes middleware for request logging, JSON parsing, and error handling. Static file serving and development hot reloading are handled through Vite integration, allowing for a unified development experience.

## Data Storage Solutions
The application is configured to use PostgreSQL as the primary database with Drizzle ORM as the data access layer. The schema includes tables for users and demo requests, with UUID primary keys and proper indexing. The current implementation includes both in-memory storage (for development) and database storage interfaces, allowing for easy environment switching.

Database migrations are managed through Drizzle Kit, providing version control for schema changes. The configuration supports connection pooling and is optimized for serverless environments through Neon Database integration.

## Authentication and Authorization
Currently implements a basic user system with username/password authentication structure in the database schema. The authentication system is prepared for expansion with session management capabilities through connect-pg-simple for PostgreSQL session storage.

## External Dependencies
- **Neon Database**: Serverless PostgreSQL database provider for production data storage
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect support
- **React Query**: Server state management and data fetching with caching
- **Radix UI**: Headless UI component library for accessibility and consistent behavior
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design
- **shadcn/ui**: Pre-built component library based on Radix UI and Tailwind CSS
- **Vite**: Build tool and development server with hot module replacement
- **WhatsApp Business API**: Integration point for WhatsApp messaging capabilities (prepared for implementation)
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

The application architecture supports easy scaling and deployment, with clear separation between development and production environments. The modular structure allows for incremental feature development while maintaining code organization and type safety throughout the stack.