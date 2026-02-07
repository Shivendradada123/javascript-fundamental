const events = [
  { id: 1, start: 0, duration: 4, dependencies: [] },
  { id: 2, start: 3, duration: 2, dependencies: [1] }
];

const logs = [
  { eventId: 1, actualStart: 0, actualEnd: 4 },
  { eventId: 2, actualStart: 4, actualEnd: 6 }
];


function check(events, logs) {
  for (let e of events) {
    let l = logs.find(x => x.eventId === e.id);
    if (!l) return false;

    if (l.actualEnd - l.actualStart !== e.duration) return false;
    if (l.actualStart < e.start) return false;

    for (let d of e.dependencies) {
      let dl = logs.find(x => x.eventId === d);
      if (l.actualStart < dl.actualEnd) return false;
    }
  }
  return true;
}
