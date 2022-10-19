## Snapshot testing

- Install react-test-renderer
- Add a snapshot test
- Commit the initial snapshot
- If any changes need to be made to the DOM, the snapshot test would fail. We would then update the snapshot
- Using keys mentioned in interactive mode (update all or update selectively)
- Changes in .css files aren't caught (as there is no change in DOM)
  - Possible solutions
    - Use inline styles (if feasible)
    - Use styled components
    - Use visual testing tools [screenshot testing]


### References

- Snapshot testing can't verify CSS changes - https://stackoverflow.com/a/53154956
- Visual regression testing
  - https://storybook.js.org/docs/react/writing-tests/visual-testing
  - https://www.creativebloq.com/features/the-5-best-visual-regression-testing-tools