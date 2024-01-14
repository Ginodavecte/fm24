import React from 'react'

export function skillValueColored(value) {
  const trimmed = value.trim();

  if (trimmed && trimmed !== '-') {
    const split = value.split('-');

    if (split.length > 0) {
      return (
        <div className="skill-value-wrapper">
          {split.map((index, key) => {
            let className;
            const intValue = parseInt(index);

            if (intValue <= 5) {
              className = 'rating-color-0-5';
            } else if (intValue <= 10) {
              className = 'rating-color-6-10';
            } else if (intValue <= 15) {
              className = 'rating-color-11-15';
            } else {
              className = 'rating-color-16-20';
            }

            return (
              <div key={key} className={className}>
                {key === 1 ? ` - ${index}` : index}
              </div>
            );
          })}
        </div>
      );
    }
  } else {
    return '-';
  }
}

// export default skillValueColored();