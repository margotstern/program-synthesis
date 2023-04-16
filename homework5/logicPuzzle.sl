; Logic Puzzle: Five people were eating apples, A finished before B, but
; behind C. D finished before E, but behind B. What was the finishing order?

; CABDE

; Variable declarations
(declare-fun a () Int)
(declare-fun b () Int)
(declare-fun c () Int)
(declare-fun d () Int)
(declare-fun e () Int)

; Constraints
(assert (> a 0))
(assert (> b 0))
(assert (> c 0))
(assert (> d 0))
(assert (> e 0))

(assert (and (< a b) (< c a)))
(assert (< a b))
(assert (< c a))
(assert (and (< d e) (< b d)))
(assert (< d e))
(assert (< b d))



; Solve
(check-sat)
(get-model)

