Feature: Images Checking
    Scenario: Images are of the right size

        Given I open 'https://automationteststore.com/'
        When I buy some goods
        Then I check shopping card item images:
            """
            [
            {"src":"//automationteststore.com/image/thumbnails/18/6f/demo_product01_jpg-100089-75x75.jpg", "width":"75", "height":"75"},
            {"src":"//automationteststore.com/image/thumbnails/18/6b/demo_product02_3_jpg-100029-75x75.jpg", "width":"75", "height":"75"},
            {"src":"//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-75x75.jpg", "width":"75", "height":"75"}
            ]
            """