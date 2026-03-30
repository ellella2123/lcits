-- USERS TABLE
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE INDEX idx_users_email ON users(email);

-- CLIENTS TABLE
CREATE TABLE clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lab_id VARCHAR(50) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(20),
    phone VARCHAR(50),
    email VARCHAR(255),
    address TEXT,
    test_requested VARCHAR(255),
    sample_type VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_clients_lab_id ON clients(lab_id);
CREATE INDEX idx_clients_name ON clients(full_name);
CREATE INDEX idx_clients_phone ON clients(phone);

-- TESTS TABLE
CREATE TABLE tests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    name VARCHAR(255),
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE INDEX idx_tests_client_id ON tests(client_id);

-- SAMPLE TRACKING TABLE
CREATE TABLE sample_tracking (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    status VARCHAR(50) DEFAULT 'Pending',
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE INDEX idx_tracking_client_id ON sample_tracking(client_id);

-- RESULTS TABLE
CREATE TABLE results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    result_data TEXT,
    file_path VARCHAR(255),
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE INDEX idx_results_client_id ON results(client_id);