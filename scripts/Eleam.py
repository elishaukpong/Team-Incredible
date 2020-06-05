"""
Script for printing my HNG7 basic information
"""
from typing import AnyStr


def print_my_info() -> AnyStr:
    """
    Prints my basic HNG7 user information for task 1
    :return:
        String: my information
    """
    name = "Eleam Emmanuel"
    hng_id = "HNG-02403"
    email = "emmaldini12@gmail.com"
    language = "Python"
    return f"Hello World, this is {name} with HNGi7 ID {hng_id} and email {email} using {language} for stage 2 task."


if __name__ == '__main__':
    print(print_my_info())

