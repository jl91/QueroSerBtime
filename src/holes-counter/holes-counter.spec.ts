import { HolesCounter } from "./holes-counter";

describe('HolesCounter', () => {
    let holesCounter: HolesCounter;
    beforeEach(() => {
        holesCounter = new HolesCounter();
    });

    it('should test setText', () => {
        const actual = holesCounter.setText('Lorem');
        expect(actual instanceof HolesCounter).toBeTruthy();
    });

    it('should test getQuantityOfHoles', () => {

        [
            {
                "actual": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis urna a est hendrerit dictum. Curabitur imperdiet augue ut dapibus imperdiet. Integer efficitur neque interdum velit sodales, malesuada congue diam viverra. Pellentesque ut rutrum arcu. Morbi feugiat dictum lacus sit amet interdum. Cras vitae velit et purus posuere imperdiet quis eu nisl. Proin pellentesque augue eu dui viverra, vel feugiat sapien ullamcorper. Praesent interdum interdum tortor id pulvinar. Nulla cursus lacus venenatis sagittis sollicitudin. Curabitur fermentum ipsum ac turpis pretium condimentum. Nullam id ultrices leo.",
                "expected": 169
            },
            {
                "actual": "Suspendisse potenti. Vestibulum gravida lacinia augue, et finibus eros dapibus vel. Sed dictum urna elit, vel suscipit quam feugiat vitae. Pellentesque facilisis dignissim pulvinar. Morbi blandit, tortor at egestas porttitor, leo sapien dapibus sapien, a convallis nulla eros sit amet dolor. Morbi vitae blandit ex. Nam vulputate gravida augue, non rutrum mauris tristique eu. Duis tempor eu turpis a molestie. Donec fringilla vel lorem sed vehicula. Sed eu fermentum neque. Nullam vel risus et lectus porta interdum. Maecenas interdum ullamcorper magna et molestie.",
                "expected": 170
            },
            {
                "actual": "Nullam vulputate lacinia magna sit amet consequat. Morbi semper gravida porta. Etiam tempor sodales nulla sit amet aliquam. Nunc a ultricies odio. Ut sodales posuere justo a consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris sem, interdum eu nulla a, egestas sodales sapien. Donec et vehicula tellus.",
                "expected": 101
            },
            {
                "actual": "Mauris egestas diam turpis, sit amet molestie nunc venenatis et. Morbi a orci nisl. Curabitur ut tincidunt arcu. Duis ultricies convallis nulla sed commodo. Ut lacinia nulla dictum molestie condimentum. Vivamus accumsan nec sem vitae maximus. Nulla tempus sapien magna, eget laoreet urna suscipit eu. Phasellus gravida eu urna eu lobortis.",
                "expected": 86
            },
            {
                "actual": "B Suspendisse sit amet lectus eget risus sagittis auctor placerat eu ante. In sit amet eros ligula. Quisque ut malesuada nulla, at imperdiet eros. Ut tempor dignissim risus non venenatis. Vestibulum a gravida magna, non porttitor augue. Quisque facilisis suscipit mi, quis consectetur ipsum luctus eget. Cras lobortis, leo nec fringilla dictum, augue velit eleifend lectus, at ultricies justo velit et purus. Curabitur sem ex, vestibulum laoreet vehicula eu, gravida nec orci. Fusce id fringilla ante, id ornare magna. Nunc nisi tortor, aliquam malesuada sapien et, porttitor vehicula libero. In ultrices feugiat metus ut elementum. Nunc facilisis dui massa, ut fermentum ex tempor eu. Fusce euismod convallis sem at dignissim. Nunc ultrices, erat quis scelerisque molestie, elit est accumsan turpis, vitae commodo nisi libero sed ipsum. Maecenas tempus dolor sit amet lectus interdum, vel porttitor justo gravida.",
                "expected": 243
            },
            {
                "actual": "789795465487h9HHHHHHhHH7jJJJKKKKLLLLLLLLLLLl4;65,.4,465,.4;.,.6;54,.;4][56400-96078894894768967865667576546544364324213426134423644@",
                "expected": 0
            }
        ].forEach((item) => {
            const actual = holesCounter.setText(item.actual).getQuantityOfHoles();
            expect(actual).toEqual(item.expected);
        });
    });
});