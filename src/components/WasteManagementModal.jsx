import React, { useRef, useLayoutEffect } from "react";

export default function WasteManagementModal({ setSelectedService, items, setItems, rewards, setRewards }) {
  const pointsValue = { plasticBottles: 1, cans: 2 };
  const exchangeItems = { rice: 30, broom: 25 };
  const totalPoints =
    items.plasticBottles * pointsValue.plasticBottles +
    items.cans * pointsValue.cans;

  const pointsUsed =
    rewards.rice * exchangeItems.rice + rewards.broom * exchangeItems.broom;

  const remainingPoints = totalPoints - pointsUsed;

  const calculateMaxQuantity = (rewardType) => {
    const pointsPerItem = exchangeItems[rewardType];
    const otherPointsUsed = Object.keys(rewards).reduce((total, key) => {
      if (key !== rewardType) return total + rewards[key] * exchangeItems[key];
      return total;
    }, 0);

    const availablePoints = totalPoints - otherPointsUsed;
    return Math.floor(availablePoints / pointsPerItem);
  };

  const resetAll = () => {
    setItems({ plasticBottles: 0, cans: 0 });
    setRewards({ rice: 0, broom: 0 });
  };

  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const saved = el.scrollTop;
    return () => {
      el.scrollTop = saved;
    };
  });

  return (
    <div className="modal-overlay" onClick={() => setSelectedService(null)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button className="close-button" onClick={() => setSelectedService(null)}>×</button>

        <div
          ref={contentRef}
          style={{
            overflowY: "auto",
            padding: "0 1rem",
            flex: 1,
            maxHeight: "calc(90vh - 100px)",
          }}
        >
          <h2>Waste Management Program</h2>

          <div className="program-instructions">
            <h3>How it Works:</h3>
            <ul>
              <li><strong>Plastic Bottles:</strong> 1 point each</li>
              <li><strong>Cans:</strong> 2 points each</li>
              <li><strong>Rice:</strong> 30 points each</li>
              <li><strong>Broom:</strong> 25 points each</li>
              <li>Bring items to Quezon City Hall</li>
            </ul>
          </div>

          {/* Waste Items */}
          <div className="points-calculator">
            <h3>Points Calculator</h3>

            <div className="section-title-small">Your Waste Items:</div>
            <div className="items-counter">
              {/* Plastic Bottles */}
              <div className="counter-item">
                <div className="item-info">
                  <img src="/images/PLASTIC BOTTLES.png" alt="Plastic Bottle" />
                  <div className="item-details">
                    <h4>Plastic Bottles</h4>
                    <span className="points-value">1 point each</span>
                  </div>
                </div>
                <div className="counter-controls">
                  <input
                    type="number"
                    min="0"
                    value={items.plasticBottles}
                    onChange={(e) =>
                      setItems((prev) => ({ ...prev, plasticBottles: Math.max(0, Number(e.target.value)) }))
                    }
                  />
                </div>
              </div>

              {/* Cans */}
              <div className="counter-item">
                <div className="item-info">
                  <img src="/images/LATA.png" alt="Can" />
                  <div className="item-details">
                    <h4>Cans</h4>
                    <span className="points-value">2 points each</span>
                  </div>
                </div>
                <div className="counter-controls">
                  <input
                    type="number"
                    min="0"
                    value={items.cans}
                    onChange={(e) =>
                      setItems((prev) => ({ ...prev, cans: Math.max(0, Number(e.target.value)) }))
                    }
                  />
                </div>
              </div>
            </div>

            {/* Points Summary */}
            <div className="points-summary">
              <div className="total-points">
                <h4>Total Points: <span className="points">{totalPoints}</span></h4>
                <div className="points-breakdown">
                  <span>Points Used: {pointsUsed}</span>
                  <span>Remaining: {remainingPoints}</span>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="section-title-small">Select Your Rewards:</div>
            <div className="rewards-selection">
              {/* Rice */}
              <div className="reward-item">
                <div className="reward-info">
                  <img src="/images/BIGAS.png" alt="Rice" />
                  <div className="reward-details">
                    <h4>Rice</h4>
                    <span className="reward-points">{exchangeItems.rice} points each</span>
                    <span className="max-quantity">Max: {calculateMaxQuantity("rice")} pcs</span>
                  </div>
                </div>
                <div className="reward-controls">
                  <input
                    type="number"
                    min="0"
                    max={calculateMaxQuantity("rice")}
                    value={rewards.rice}
                    onChange={(e) => {
                      const val = Math.max(0, Number(e.target.value));
                      if (val <= calculateMaxQuantity("rice")) {
                        setRewards((prev) => ({ ...prev, rice: val }));
                      }
                    }}
                  />
                </div>
              </div>

              {/* Broom */}
              <div className="reward-item">
                <div className="reward-info">
                  <img src="/images/TINGTING.png" alt="Broom" />
                  <div className="reward-details">
                    <h4>Broom</h4>
                    <span className="reward-points">{exchangeItems.broom} points each</span>
                    <span className="max-quantity">Max: {calculateMaxQuantity("broom")} pcs</span>
                  </div>
                </div>
                <div className="reward-controls">
                  <input
                    type="number"
                    min="0"
                    max={calculateMaxQuantity("broom")}
                    value={rewards.broom}
                    onChange={(e) => {
                      const val = Math.max(0, Number(e.target.value));
                      if (val <= calculateMaxQuantity("broom")) {
                        setRewards((prev) => ({ ...prev, broom: val }));
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Final Summary */}
            <div className="final-summary">
              <h4>Your Exchange Summary:</h4>
              <div className="summary-items">
                {rewards.rice > 0 && (
                  <div className="summary-item">
                    <span>Rice: {rewards.rice} pcs</span>
                    <span>{rewards.rice * exchangeItems.rice} points</span>
                  </div>
                )}
                {rewards.broom > 0 && (
                  <div className="summary-item">
                    <span>Broom: {rewards.broom} pcs</span>
                    <span>{rewards.broom * exchangeItems.broom} points</span>
                  </div>
                )}
                <div className="summary-total">
                  <strong>Total: {pointsUsed} points</strong>
                </div>
                {remainingPoints > 0 && (
                  <div className="summary-remaining">
                    <span>Remaining points: {remainingPoints}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="calculator-actions">
              <button className="reset-btn" onClick={resetAll}>Reset All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
