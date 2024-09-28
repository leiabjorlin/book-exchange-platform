# Peer-to-Peer Book Exchange Platform

## Overview

This project is a Peer-to-Peer Book Exchange Platform, where users can browse through available books and exchange them with others. The app provides two key functionalities: **Swiping Books**, where users can swipe through available books similar to a dating-app-like experience, and **Chats**, where users can manage their conversations with those they have matched with for book exchanges.

The app is built using **React.js**.

## Key Features

- **Book Swiping:** A dating-app-like swiping experience where users can swipe right to match with books they are interested in.
- **Match Notifications:** When users swipe right on a book, and it results in a match, a popup notifies them of the match and creates a chat to arrange an exchange.
- **Chats:** Users can manage their conversations with people they've matched with to coordinate the exchange of books.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** should be installed on your system.

## Key Decisions

- **Dating-App-Style Swiping**: Implementing the `react-tinder-card` package allows for an intuitive user experience, mimicking popular swipe-based dating-apps.
- **Popup Notifications**: Popup notifications inform users about matches, improving user engagement.

## Project Plan and Future Milestones

### Phase 1 (Current)
- **Core Features**:
  - Book swiping interface.
  - Placeholder for the chat interface (yet to be developed).

### Phase 2 (Next Steps)
- **Chats**:
  - Develop a full chat interface for users to communicate with their matched book exchangers.
 
- **User Profiles**:
  - Add user profiles where users can view their matched users, the books they are offering, and a brief bio.

- **Book Listings**:
  - Allow users to add and manage their own book listings (title, author, condition, etc.).
  - Implement a search functionality to filter books by genre, author, or condition.

### Phase 3 (Long-Term Vision)
- **Recommendation System**:
  - Implement a recommendation system using machine learning to suggest books based on a user’s swiping history and interests.
  
- **Book Exchange Tracking**:
  - Introduce a tracking feature where users can mark books as exchanged and leave reviews for the other user.
  
- **Community Features**:
  - Add a community forum for book discussions and recommendations.
