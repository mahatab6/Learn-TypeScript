
// numberic enum

enum Direction {
    up,
    down,
    left,
    right
}

let move: Direction = Direction.down

console.log(move)

// Custom Numberic enum

enum Statuscode {
    Success = 200 ,
    NotFound = 404,
    ServerError = 500
}

let codeStatus: Statuscode = Statuscode.ServerError;

console.log(codeStatus)

// Heterogeneous Enum

enum Mixed {
    No = 0,
    yes = "YES"
}

let mix: Mixed = Mixed.yes

console.log(mix)