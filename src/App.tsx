import "./App.css";

function App() {
  return (
    <div className="crm-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">MB</div>
          <div>
            <h2>Automotive CRM</h2>
            <span>Management Platform</span>
          </div>
        </div>

        <nav className="navigation">
          <p className="nav-section">MAIN</p>

          <button className="nav-item active">
            <span>▦</span>
            Dashboard
          </button>

          <button className="nav-item">
            <span>◉</span>
            Customers
          </button>

          <button className="nav-item">
            <span>◆</span>
            Vehicles
          </button>

          <p className="nav-section">BUSINESS</p>

          <button className="nav-item">
            <span>↗</span>
            Sales
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Service
          </button>

          <button className="nav-item">
            <span>□</span>
            Support
          </button>

          <p className="nav-section">INTELLIGENCE</p>

          <button className="nav-item">
            <span>✦</span>
            AI Insights
          </button>

          <button className="nav-item">
            <span>▤</span>
            Reports
          </button>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">RM</div>
          <div>
            <strong>Rasheedah Matyeni</strong>
            <span>Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="top-header">
          <div>
            <p className="breadcrumb">Overview</p>
            <h1>Dashboard</h1>
          </div>

          <div className="header-actions">
            <button className="icon-button">⌕</button>
            <button className="icon-button notification">♢</button>
            <div className="profile">
              <div className="user-avatar small">RM</div>
              <div>
                <strong>Rasheedah</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-content">
          {/* Welcome */}
          <div className="welcome">
            <div>
              <h2>Good morning, Rasheedah.</h2>
              <p>
                Here's an overview of your automotive operations today.
              </p>
            </div>

            <button className="primary-button">+ Add Customer</button>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span>Total Customers</span>
                <div className="stat-icon">◉</div>
              </div>
              <h3>2,458</h3>
              <p className="positive">↑ 8.2% <span>vs last month</span></p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Active Leads</span>
                <div className="stat-icon">↗</div>
              </div>
              <h3>184</h3>
              <p className="positive">↑ 12.5% <span>vs last month</span></p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Registered Vehicles</span>
                <div className="stat-icon">◆</div>
              </div>
              <h3>1,923</h3>
              <p className="positive">↑ 5.4% <span>vs last month</span></p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Open Requests</span>
                <div className="stat-icon">!</div>
              </div>
              <h3>76</h3>
              <p className="warning">12 high priority</p>
            </div>
          </div>

          {/* Middle section */}
          <div className="dashboard-grid">
            {/* Sales pipeline */}
            <section className="panel sales-panel">
              <div className="panel-header">
                <div>
                  <h3>Sales Pipeline</h3>
                  <p>Current opportunities by stage</p>
                </div>
                <button className="text-button">View sales →</button>
              </div>

              <div className="pipeline">
                <div className="pipeline-stage">
                  <div className="pipeline-info">
                    <span>New Leads</span>
                    <strong>120</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "85%" }} />
                  </div>
                </div>

                <div className="pipeline-stage">
                  <div className="pipeline-info">
                    <span>Test Drives</span>
                    <strong>78</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "65%" }} />
                  </div>
                </div>

                <div className="pipeline-stage">
                  <div className="pipeline-info">
                    <span>Quotes</span>
                    <strong>54</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "45%" }} />
                  </div>
                </div>

                <div className="pipeline-stage">
                  <div className="pipeline-info">
                    <span>Closed Sales</span>
                    <strong>31</strong>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "30%" }} />
                  </div>
                </div>
              </div>
            </section>

            {/* AI Insights */}
            <section className="panel ai-panel">
              <div className="panel-header">
                <div>
                  <h3>✦ AI Insights</h3>
                  <p>Automated recommendations</p>
                </div>
                <span className="ai-badge">AI</span>
              </div>

              <div className="insight">
                <div className="insight-icon warning-icon">!</div>
                <div>
                  <strong>12 high-priority requests</strong>
                  <p>Require service team attention.</p>
                </div>
              </div>

              <div className="insight">
                <div className="insight-icon">↗</div>
                <div>
                  <strong>24 high-potential leads</strong>
                  <p>Ready for sales follow-up.</p>
                </div>
              </div>

              <div className="insight">
                <div className="insight-icon">✓</div>
                <div>
                  <strong>18 service reminders</strong>
                  <p>Customers are due for maintenance.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Service requests */}
          <section className="panel">
            <div className="panel-header">
              <div>
                <h3>Recent Service Requests</h3>
                <p>Latest customer service activity</p>
              </div>

              <button className="text-button">View all →</button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Vehicle</th>
                    <th>Request</th>
                    <th>Priority</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <strong>Thabo Mokoena</strong>
                    </td>
                    <td>GLC 300</td>
                    <td>Brake inspection</td>
                    <td>
                      <span className="priority high">High</span>
                    </td>
                    <td>
                      <span className="status open">Open</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Sarah Williams</strong>
                    </td>
                    <td>C-Class C200</td>
                    <td>Service booking</td>
                    <td>
                      <span className="priority medium">Medium</span>
                    </td>
                    <td>
                      <span className="status progress-status">
                        In progress
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Ahmed Khan</strong>
                    </td>
                    <td>A-Class A200</td>
                    <td>Engine warning</td>
                    <td>
                      <span className="priority high">High</span>
                    </td>
                    <td>
                      <span className="status open">Open</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Nomsa Dlamini</strong>
                    </td>
                    <td>E-Class E200</td>
                    <td>General maintenance</td>
                    <td>
                      <span className="priority low">Low</span>
                    </td>
                    <td>
                      <span className="status resolved">Resolved</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;