package eq

import (
	"bytes"
	"fmt"
	"testing"
)

var (
	hello1  = "I could tell you my pass phrase, but then I would have to kill you."
	hello2  = "I could tell you my pass phrase, but then I would have to kill you."
	helloA1 = [67]byte{0x49, 0x20, 0x63, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x74, 0x65, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6d, 0x79, 0x20, 0x70, 0x61, 0x73, 0x73, 0x20, 0x70, 0x68, 0x72, 0x61, 0x73, 0x65, 0x2c, 0x20, 0x62, 0x75, 0x74, 0x20, 0x74, 0x68, 0x65, 0x6e, 0x20, 0x49, 0x20, 0x77, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x6b, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x2e}
	helloA2 = [67]byte{0x49, 0x20, 0x63, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x74, 0x65, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6d, 0x79, 0x20, 0x70, 0x61, 0x73, 0x73, 0x20, 0x70, 0x68, 0x72, 0x61, 0x73, 0x65, 0x2c, 0x20, 0x62, 0x75, 0x74, 0x20, 0x74, 0x68, 0x65, 0x6e, 0x20, 0x49, 0x20, 0x77, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x6b, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x2e}
	helloS1 = []byte{0x49, 0x20, 0x63, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x74, 0x65, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6d, 0x79, 0x20, 0x70, 0x61, 0x73, 0x73, 0x20, 0x70, 0x68, 0x72, 0x61, 0x73, 0x65, 0x2c, 0x20, 0x62, 0x75, 0x74, 0x20, 0x74, 0x68, 0x65, 0x6e, 0x20, 0x49, 0x20, 0x77, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x6b, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x2e}
	helloS2 = []byte{0x49, 0x20, 0x63, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x74, 0x65, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x6d, 0x79, 0x20, 0x70, 0x61, 0x73, 0x73, 0x20, 0x70, 0x68, 0x72, 0x61, 0x73, 0x65, 0x2c, 0x20, 0x62, 0x75, 0x74, 0x20, 0x74, 0x68, 0x65, 0x6e, 0x20, 0x49, 0x20, 0x77, 0x6f, 0x75, 0x6c, 0x64, 0x20, 0x68, 0x61, 0x76, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x6b, 0x69, 0x6c, 0x6c, 0x20, 0x79, 0x6f, 0x75, 0x2e}
)

func BenchmarkByteEqual1(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if hello1 != hello2 {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual2(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if !bytes.Equal([]byte(hello1), []byte(hello2)) {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual3(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if helloA1 != helloA2 {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual4(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if string(helloA1[:]) != string(helloA2[:]) {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual5(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if !bytes.Equal(helloA1[:], helloA2[:]) {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual6(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if string(helloS1) != string(helloS2) {
			fmt.Printf("false")
		}
	}
}

func BenchmarkByteEqual7(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if !bytes.Equal(helloS1, helloS2) {
			fmt.Printf("false")
		}
	}
}
